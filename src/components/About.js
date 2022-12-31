import React from "react";
import { useState } from "react";

export default function About(props) {
  let darkStyle = {
    backgroundColor: "black",
    color: "white",
    border: "1px solid white"
  };
  // Create myStyle object from props values instead
  // const [myStyle, setMyStyle] = useState({});
  let myStyle = {
   color : props.mode === "dark" ? "white":"black",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)":"white"
  }
  const [btnTxt, setBtnTxt] = useState('Enable Dark Mode')
  // const toggleStyle = () => {
  //   if (myStyle.backgroundColor === 'black') {
  //       setMyStyle({
  //           backgroundColor: 'white',
  //           color:'black'
  //       })
  //       setBtnTxt('Enable Dark Mode')
  //   } else {
  //       setMyStyle(darkStyle)
  //       setBtnTxt('Disable Dark Mode')
  //   }
  // }
  return (
    <div className="container">
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Analyze your text</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quidem cupiditate laudantium, et neque eos pariatur voluptatibus excepturi nobis nisi quasi ipsum dolore non ducimus delectus expedita iure aliquam. Tenetur mollitia minima laboriosam. Corrupti!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Free to use</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, sed. Quam dolore hic consectetur animi tempore atque explicabo assumenda blanditiis libero, minus error accusantium sed quia, necessitatibus cum, fugit ipsam impedit illo consequuntur totam praesentium. Quas sequi obcaecati nesciunt nulla!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Browser compatible</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus laudantium repudiandae cumque eum dolore fugit. Reprehenderit deserunt enim commodi amet iste ut harum a, quisquam perferendis vitae. Voluptates, suscipit?<code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* Enable Dark Mode button */}
      {/* <div className="container my-3">
        <button className="btn btn-primary" onClick = {toggleStyle}>{btnTxt}</button>
      </div> */}
    </div>
  );
}
