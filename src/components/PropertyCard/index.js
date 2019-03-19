import React, { PureComponent, Fragment } from "react";
import RatingStars from '../RatingStars';
import GlobalRating from '../GlobalRating'

export default class PropertyCard extends PureComponent {
  renderHeading(isMobile, Property) {
    if (!isMobile) {
      return <div className='property-card__title'><h4>{Property.listingTitle}</h4></div>;
    }
  }

  renderFeatures(isMobile, Property) {
    const averageRating = Property.reviewsRatingAverage;
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
          <div className='property-card__footer'>
            <GlobalRating ratingGlobal={Property.ratingGlobal} ratingNumber={Property.ratingNumber}/>
            <div className="property-card__price">
              <strong>{Property.currency}{Property.price} <small>avg/night</small></strong>
            </div>
            <div className="property-card__reviews">
              <div className='reviews-rating-stars'><RatingStars averageRating={averageRating}/></div>
              <div className='reviews-number'>{Property.reviewsNumber} reviews</div>
            </div>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="property-card__price">
            <h4>{Property.currency}{Property.price} <small>avg/night</small></h4>
          </div>
          <ul className="property-card__features">
            <li className="feature">
              Bedrooms <span className="counter">{Property.bedrooms}</span>
            </li>
            <li className="feature">
              Bathrooms <span className="counter">{Property.bathrooms}</span>
            </li>
            <li className="feature">
              Sleeps <span className="counter">{Property.sleeps}</span>
            </li>
          </ul>
          <div className="property-card__reviews">
            <div className='reviews-rating-stars'><RatingStars averageRating={averageRating}/></div>
            <div className='reviews-number'>{Property.reviewsNumber} reviews</div>
          </div>
        </Fragment>
      );
    }
  }

  render() {
    const { isMobile } = this.props;
    const Property = this.props.property;
    return (
      <div className="property-card property-card--complex">
        <div className="property-card__image" style={{ backgroundImage: `url(${Property.listingThumbNail})` }} />
        <div className="property-card__details">
          {this.renderHeading(isMobile, Property)}
          {this.renderFeatures(isMobile, Property)}
        </div>
      </div>
    );
  }
}
