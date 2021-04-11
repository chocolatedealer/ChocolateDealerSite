import React, { Component } from "react";
import Header from "../../components/header";
import MainImage from "../../images/KSIK6223.JPG"
import MainImage2 from "../../images/CURIOUS2.JPG"
import './home.css'
import Dinner from "../../images/Dinner.jpg"
import Banner from "../../images/WideBanner.jpg"
// import MainVid from "./HomeVid.mp4"

class Home extends Component {
   
  render() {
    return (
      <div>
        <Header />
        <div className="Background" />
        <div className="MainParent">
          {/* <h1>CHOCOLATE DEALER</h1> */}
          {/* <video autoplay controls>
            <source src={MainVid} type="video/mp4" ></source>
          </video> */}
          <div className="HeroImgs">
            <img src={ Banner } className="Banner" alt="ProductImage"/>
            <img src={ Dinner } className="Dinner" alt="ProductImage"/>
          </div>
          <div className="TwoColumnsFirst">
            <img src={ MainImage } alt="ProductImage"/>
            <div className="MainTextGroup" id="Dark">
              <h2>Premium Chocolate</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
                  pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
                  Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
                  in pretium orci vestibulum eget.</p>
              <a href="/">Buy Now!</a>
            </div>
          </div>
          <div className="TwoColumns">
            <div className="MainTextGroup" id="Milk">
              <h2>Premium Chocolate</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
                  pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
                  Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
                  in pretium orci vestibulum eget.</p>
              <a href="/">Buy Now!</a>
            </div>
            <img src={ MainImage2 } alt="ProductImage"/>
          </div>
          <h1>Refills</h1>
          <div className="ThreeColumns">
            <div className="Refill">
              <img src={ MainImage2 } alt="ProductImage"/>
              <p1>Dark Chocolate <br/>$40</p1>
              <br/>
              <a>Buy Now</a>
            </div>
            <div className="Refill">
              <img src={ MainImage2 } alt="ProductImage"/>
              <p1>Milk Chocolate <br/>$40</p1>
              <br/>
              <a>Buy Now</a>
            </div>
            <div className="Refill">
              <img src={ MainImage2 } alt="ProductImage"/>
              <p1>White Chocolate <br/>$40</p1>
              <br/>
              <a>Buy Now</a>
            </div>
          </div>
          <footer>
            <p>Contact Email: Blah@gmail.com</p>
            <p>Sign Up For Our Newsletter</p>
            <p>Customer Serice Information</p>
            <p>Special Orders / Gifts</p>
          </footer>
        </div>

      </div>
    );
  }
}

export default Home;