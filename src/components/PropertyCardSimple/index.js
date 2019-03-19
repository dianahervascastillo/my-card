import React, { PureComponent } from "react";
import RatingStars from '../RatingStars';
import GlobalRating from '../GlobalRating'

export default class PropertyCard extends PureComponent {

  render() {
    const Property = this.props.property;
    const averageRating = Property.reviewsRatingAverage;
    return (
      <div className="property-card property-card--simple">
        <div className="property-card__image" style={{ backgroundImage: `url(${Property.listingThumbNail})` }} />
        <div className="property-card__details">
          <h4>{Property.listingTitle}</h4>
          <div className="property-card__price">
            <strong>{Property.currency}{Property.price}</strong> <small>avg/night</small>
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
          <GlobalRating ratingGlobal={Property.ratingGlobal} ratingNumber={Property.ratingNumber}/>
          <div className="property-card__reviews">
            <div className='reviews-rating-stars'><RatingStars averageRating={averageRating}/></div>
            <div className='reviews-number'>{Property.reviewsNumber} reviews</div>
          </div>
        </div>
      </div>
    );
  }
}
