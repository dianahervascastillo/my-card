import React, { PureComponent } from "react";

export default class PropertyCard extends PureComponent {
  render() {
    const Property = this.props.property;
    return (
      <div className="property-card property-card--simple">
        <div className="property-card__image">
          <img src={Property.listingThumbNail} alt={Property.listingTitle} />
        </div>
        <div className="property-card__details">
          <h4>{Property.listingTitle}</h4>
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
        </div>
      </div>
    );
  }
}
