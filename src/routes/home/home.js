import React, { Component } from "react";
import MainImage from "../../images/placeholder1.png"
import './home.css'

class Home extends Component {
   
  render() {
    return (
      <div>
          <div className="Background" />
        <div className="MainParent">
            <h1>My Chocolate Dealer</h1>
            <div className="MainGroup">
                <img src={MainImage} alt="ProductImage"/>
                <div className="MainTextGroup">
                    <h2>Premium Chocolate</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
    pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
    Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
    in pretium orci vestibulum eget.</p>
                    <a href="/">Buy Now!</a>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;