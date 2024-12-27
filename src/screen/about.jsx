import React from "react";

export default function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1> About Us</h1>
          <p>
            Numbers give you credibility, especially if you’re illustrating a
            problem you’re trying to solve or the progress you’ve made as a
            business (e.g. number of items sold or years you’ve been in
            business).
          </p>
          <p>
            Consider the stats you can use to make a point about your company
            mission or quantify your impact as a business to include on your
            About Us page.
          </p>
          <p>
            Whether you’re explaining the industry problem that comes up early
            in your story or highlighting the milestones at your story’s climax,
            tying relevant figures into your narrative can help you communicate
            your message more effectively.
          </p>
          <h1> Marie Forleo</h1>
          <p>
            Marie Forleo structures her About page like a long-form letter to
            the reader. It tells her story in the format of a condensed
            autobiography before refocusing on the reader with a section aptly
            titled, “Which brings me to you”.
          </p>
          <p>
            For entrepreneurs who have a personal brand that goes with their
            business, this style of an About Us page might be better. You can
            treat your business as one important chapter in a much larger series
            of stories, starting at the beginning and ending where your ideal
            reader is introduced as a character.
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

//status : d
/*
// import  { useEffect, useMemo, useRef, useState } from "react";

// import { useLocation, useParams } from "react-router";
// import { createSearchParams, useSearchParams } from "react-router-dom";


(
   // const [searchParams, setSearchParam] = useSearchParams();
  // const[count,setCount]=useState(0)
  // const[mul,setMul]=useState(0)
  // const myref = useRef()
  // const id = useParams();
  // const location = useLocation();

  // const incrementCount=()=>{
  //   console.log("in")
  //   setCount(count+1)
  // }
  // const decrementCount=()=>{
  //   console.log("de")
  //   setCount(count-1)
  // }
  // const multiplication =useMemo(()=>{
  //   console.log("mul")
  //   return 4*45*646546*54*6*544*45*646546*54*6*54
  // },[])
  // const clickHandler = (e) => {
  //   e.preventDefault();
  //   setSearchParam(createSearchParams({ id: "45" }));
  //   const favoriteFruit = searchParams.get("id");
  //   console.log(favoriteFruit);
  // };
)
   <h2>useLocation: {location.pathname}</h2>
      <h2>useParam ={id.id}</h2> 
       <label>greeting message</label>
      <input ref={myref} onChange={(e)=>{myref.current.style.color="red"}} type="text"/>
       <h2>{count}</h2>
       <button onClick={incrementCount}>increement count</button>
       <button onClick={decrementCount}>increement count</button>
       <h1>{multiplication  }</h1>

*/
/*
import react from 'react'
const Element =react.createElement("h1",{className:"greeting"},"hello !")
class Practice extends react.Component{
    constructor(){
        super()
        this.state={
            time:new Date().toTimeString(),
            name :"",
            persons : [{
                id: 1,
                name: "kishan",
                city: "srt"
              }, {
                id: 2,
                name: "bob",
                city: "brd"
              }, {
                id: 3,
                name: "alice",
                city: "rjt"
              }, {
                id: 4,
                name: "siry",
                city: "ahmndbd"
              }]
      
        
        }
    }
     tick=()=>{
         this.setState({ time:new Date().toTimeString()})
     }
    //  componentDidMount(){
    //    this.internal=setInterval(()=>this.tick(),1000)
    //  }
    //  componentWillUnmount(){
    //     clearInterval(this.internal)
    //  }
    greetingName=(e)=>{
        e.preventDefault();
        // console.log(this.state.name)
        this.setState({name:""})
    }
    render(){
        
        return(
            <> 
               {Element }
               <h3>time : {this.state.time}</h3>
               <button onClick={this.tick} >check time</button>
               <form>
                   <input type="text" value={this.state.name}  onChange={(e)=>{ this.setState({name:e.target.value})}}/>
                   <button onClick={this.greetingName} >submit</button>
               </form>
               <table>
                  <tbody>
                  {this.state.persons.map((value,i)=>(
                   <tr key={i}>
                       <td>{value.id}</td>
                       <td>{value.name}</td>
                       <td>{value.city}</td>
                   </tr>
                  ))}
                  </tbody>
               </table>
               
            </>
        )
    }
}


export default Practice */
