import React, { Fragment } from "react";
import PropertyCardSimple from "../../components/PropertyCardSimple";

export default class ListingPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("ListingPage", this.props.listings);
    return (
      <Fragment>
        {this.props.listings.properties.map((property, index) => {
          return <PropertyCardSimple key={index} property={property} />;
        })}
      </Fragment>
    );
  }
}
