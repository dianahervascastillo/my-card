import React, { PureComponent } from "react";

export default class PropertyCard extends PureComponent {
  // ifMobile() {
  //   if (this.props.isMobile === false) {
  //     console.log("QUE!", this.props.isMobile === false);
  //     return false;
  //   }
  //   console.log("QUE!", this.props.isMobile === false);
  //   return true;
  // }
  renderHeading(isMobile) {
    console.log("renderHeading", this.props.isMobile);
    if (isMobile) {
      return <div>SOY TRUE</div>;
    }

    // if (!ifMobile) {
    //   return <h4>Property Long description and stuff</h4>;
    // }
  }

  renderFeatures(ifMobile) {
    if (ifMobile) {
      return (
        <ul className="property-card__features">
          <li>ergergerger</li>
          <li>ergergergerg</li>
          <li>rfwergrgrg</li>
        </ul>
      );
    } else {
      return (
        <ul className="property-card__features">
          <li>ergergerger</li>
          <li>ergergergerg</li>
          <li>rfwergrgrg</li>
        </ul>
      );
    }
  }

  render() {
    const { isMobile } = this.props;
    console.log("PropertyCard", isMobile);
    return (
      <div className="property-card">
        <span className="property-card__image">
          <img src="" alt="Title of property" />
        </span>
        <span className="property-card__details">
          {this.renderHeading(isMobile)}
          {this.renderFeatures()}
        </span>
      </div>
    );
  }
}
