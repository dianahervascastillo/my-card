import React, { PureComponent, Fragment } from "react";

export default class PropertyCard extends PureComponent {
  renderHeading(isMobile, Property) {
    if (!isMobile) {
      return <h4>{Property.listingTitle}</h4>;
    }
  }

  renderFeatures(isMobile, Property) {
    if (!isMobile) {
      return (
        <Fragment>
          <ul className="property-card__features">
            <li className="feature">
              Sleeps <span className="counter">{Property.sleeps}</span>
            </li>
            <li className="feature">
              Bedrooms <span className="counter">{Property.bedrooms}</span>
            </li>
            <li className="feature">
              Bathrooms <span className="counter">{Property.bathrooms}</span>
            </li>
          </ul>
          <div className="property-card__rating">
            {Property.ratingGlobal} {Property.ratingnumber}
          </div>
          <div className="property-card__price">
            {Property.currency}
            {Property.price} avg/night
          </div>
          <div className="property-card__reviews">
            {Property.reviewsRatingAverage}
            {Property.reviewsNumber}
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="property-card__price">
            {Property.currency}
            {Property.price} avg/night
          </div>
          <ul className="property-card__features">
            <li className="feature">
              Sleeps <span className="counter">{Property.sleeps}</span>
            </li>
            <li className="feature">
              Bedrooms <span className="counter">{Property.bedrooms}</span>
            </li>
            <li className="feature">
              Bathrooms <span className="counter">{Property.bathrooms}</span>
            </li>
          </ul>
          <div className="property-card__reviews">
            {Property.reviewsRatingAverage}
            {Property.reviewsNumber}
          </div>
        </Fragment>
      );
    }
  }

  render() {
    const { isMobile } = this.props;
    const Property = this.props.property;
    console.log("PropertyCard", isMobile);
    return (
      <div className="property-card property-card--complex">
        <div className="property-card__image">
          <img src={Property.listingThumbNail} alt={Property.listingTitle} />
        </div>
        <span className="property-card__details">
          {this.renderHeading(isMobile, Property)}
          {this.renderFeatures(isMobile, Property)}
        </span>
      </div>
    );
  }
}
