import React from "react";
import "./index.css";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  render() {
    return (
        <Router>
            <div
                className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
                data-cursor="-color-white"
            >
                <div className="HeaderGroup">
                    <a className="headerDark"  href="/#Dark">Shop Dark</a>
                    <a className="headerMilk" href="/#Milk">Shop Milk</a>
                    <a className="headerAbout" href="/#About" >About Us</a>
                    <a href="mailto:DummyAddress@gmail.com">Contact</a>
                </div>
            </div>
        </Router>
    );
  }
}

export default Header;
