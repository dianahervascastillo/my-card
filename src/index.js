import React from "react";
import ReactDOM from "react-dom";
// import throttle from "lodash.throttle";
import ListingPage from "../src/pages/ListingPage/ListingPage";

// Data
import Listings from "../mockdata/listing.json";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMobile: window.innerWidth < 480 };
    this.HandleWindowResize = this.handleWindowResize.bind(this);
  }

  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth < 480 });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  render() {
    return (
      <div className="App">
        <ListingPage isMobile={this.state} listings={Listings} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
