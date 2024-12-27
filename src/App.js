import React from "react";
import Header from "./sharedComponents/Header";
import Footer from "./sharedComponents/Footer";
import {  BrowserRouter } from "react-router-dom";
import Routes from './routes/Routes'
import { Provider } from "react-redux";
import store from "./redux/Store";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Provider store={store}>
        <ToastContainer/>
        <BrowserRouter>  
           <Header />
           <Routes />
           <Footer />
        </BrowserRouter>
    </Provider>
  );
}

export default App;
