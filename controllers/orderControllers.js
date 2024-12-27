import jsonwebtoken from "jsonwebtoken";
import Order from "../models/order.js";
import easyinvoice from "easyinvoice";
import fs from 'fs'
const orderControllers = {
  //add order
  addOrder: async (req, res) => {
    try {
      //find user id using decode token
      const token = req.headers.token;
      const decoded = jsonwebtoken.verify(token, "45645454");
      // console.log(req.body);
      const { product, shippingCarge, totalPrice, userDetails, PaymentOption } =
        req.body;
      //save order in db
      const orderDetails = await Order.create({
        product,
        shippingCarge,
        totalPrice,
        userDetails,
        user_id: decoded.user_id,
        PaymentOption,
      });
      // console.log(orderDetails);
      //responce order placed
      res
        .status(200)
        .json({ message: "order is placed ", data: orderDetails, status: 200 });
    } catch (error) {
      res.status(404).json({ message: error.message, status: 404 });
    }
  },
  //get order by user
  getOrder: async (req, res) => {
    try {
      //find user id using decode token
      const token = req.headers.token;
      const decoded = jsonwebtoken.verify(token, "45645454");
      //find order in db
      const order = await Order.find({
        user_id: decoded.user_id,
        cancel_at: null,
      });
      //responce particular user order
      res
        .status(200)
        .json({ message: "successfully get order ", data: order, status: 200 });
    } catch (error) {
      res.status(404).json({ message: error.message, status: 404 });
    }
  },
  //get all order 
  getallOrder: async (req, res) => {
    try {
      //find user id using decode token
      // const token = req.headers.token;
      // const decoded = jsonwebtoken.verify(token, "45645454");
      //find order in db
      const order = await Order.find();
      //responce particular user order
      res
        .status(200)
        .json({ message: "successfully get order ", data: order, status: 200 });
    } catch (error) {
      res.status(404).json({ message: error.message, status: 404 });
    }
  },
  //
  cancelOrder: async (req, res) => {
    try {
      const orderId = req.body.id;
      // console.log(req.body);

      //find user id by decode token
      const token = req.headers.token;
      const decoded = jsonwebtoken.verify(token, "45645454");
      // console.log(orderId, decoded.user_id);
      //cansel order
      const cancelOrder = await Order.findOneAndUpdate(
        { user_id: decoded.user_id, _id: orderId },
        { cancel_at: new Date().toDateString() }
      );
      if (cancelOrder) {
        //responce cansel order
        res
          .status(200)
          .json({
            message: "order was cancel",
            data: cancelOrder,
            status: 200,
          });
      } else {
        //responce order not dounf
        res.status(400).json({ message: "order not found", status: 400 });
      }
    } catch (error) {
      res.status(404).json({ message: error.message, status: 404 });
    }
  },
  //download order invoice
  orderInvoice: async (req, res) => {
    try {
     const  id= req.params.id
       const orderDetails = await Order.findOne({ _id: req.params.id });
      // const detasdfdsf= 
      //  console.log(detasdfdsf);
      const data = {
        "customize": {
          //  "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html 
      },
       "documentTitle": "order invoice", //Defaults to INVOICE
        "images": {
            // The logo on top of your invoice
           // "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png",
        },
        // Your own data
        "sender": {
            "company": "Flipkart Internet Private Limited",
            "address": "Buildings Alyssa, Begonia &Clove Embassy Tech Village Outer Ring Road, Devarabeesanahalli Village, Bengaluru",
            "zip": " 560103",
            "city": "Karnataka",
            "country": "Samplecountry"

        },
        // Your recipient
        "client": {
          "company": orderDetails.userDetails.fname + " " +  orderDetails.userDetails.lname,
          "address":  orderDetails.userDetails.address ,
          "zip":  orderDetails.userDetails.zipcode,
          "city":  orderDetails.userDetails.state,
          "country":  orderDetails.userDetails.country,
          "custom1": orderDetails.userDetails.companyname,
          "custom2":orderDetails.userDetails.phone ,
        },
        "information": {
            // Invoice num  ber
            "number":orderDetails._id,
            // Invoice data
            "date": new Date().toLocaleDateString(),
        },
       
        "products":orderDetails.product.map(e => {
        return{
          "quantity":parseInt(e.qty),
          "description":e.title,
          "tax-rate": 5,
          "price": parseInt(e.price)
        }  
       }),
        // The message you would like to display on the bottom of your invoice
        "bottom-notice": "Kindly pay your invoice within 15 days.",  
     
    };
    
     const result= await easyinvoice.createInvoice(data, function (result) {});
      fs.writeFileSync(`./invoice/${id}.pdf`, result.pdf, 'base64');
      var invoicepdf =fs.readFileSync(`./invoice/${id}.pdf`);
      res.contentType("application/pdf");
      res.download(`./invoice/${id}.pdf`)
      // res.send(invoicepdf);
      // res.status(200).json({ message: "successs",data:, status: 200 });

    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};
export default orderControllers;
