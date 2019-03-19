import React, { Fragment } from "react";
import PropertyCardSimple from "../../components/PropertyCardSimple";
import PropertyCard from "../../components/PropertyCard";

export default class ListingPage extends React.Component {
  render() {
    return (
      <Fragment>
        <ul className='listing'>
          {this.props.listings.properties.map((property, index) => {
            return (
              <li key={index}><PropertyCard
                property={property}
                isMobile={this.props.isMobile}
              /></li>
            );
          })}
        </ul>
        <ul className='listing'>
          {this.props.listings.properties.map((property, index) => {
            return <li key={index}><PropertyCardSimple property={property} /></li>;
          })}
        </ul>
      </Fragment>
    );
  }
}
