import React from "react";
import ReactDOM from "react-dom";
// import throttle from "lodash.throttle";
import ListingPage from "../src/pages/ListingPage/ListingPage";

// Data
import Listings from "../src/mockdata/listing.json";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMobile: window.innerWidth <= 600 };
    this.HandleWindowResize = this.handleWindowResize.bind(this);
  }

  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth <= 600 });
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
        <ListingPage listings={Listings} {...this.state} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
