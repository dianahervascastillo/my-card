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
        <div className="property-card__image" style={{ backgroundImage: `url(${Property.listingThumbNail})` }}>
          <div className='carousel'>
            <button className="carousel--previous" type='button'>
              <svg width="24" height="14" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.118.263a.92.92 0 0 0-1.288 0L.293 10.8c-.176.176-.293.41-.293.644 0 .234.117.468.293.644l10.185 10.185c.176.176.41.293.644.293.234 0 .468-.117.644-.293a.92.92 0 0 0 0-1.288l-9.541-9.54 9.893-9.894a.92.92 0 0 0 0-1.288z"/>              </svg>
            </button>
            <button className="carousel--next" type="button">
              <svg width="24" height="14" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.263.263a.92.92 0 0 1 1.288 0L12.088 10.8c.176.176.293.41.293.644 0 .234-.117.468-.293.644L1.903 22.273c-.176.176-.41.293-.644.293-.234 0-.468-.117-.644-.293a.92.92 0 0 1 0-1.288l9.541-9.54L.263 1.55a.92.92 0 0 1 0-1.288z"/>              </svg>
            </button>
          </div>
        </div>
        <a className='property-link' href="#linktourlofproperty" target='_blank' aria-label='Opens link to Property page in new tab or window'>
          <div className="property-card__details">
            {this.renderHeading(isMobile, Property)}
            {this.renderFeatures(isMobile, Property)}
          </div>
        </a>
      </div>
    );
  }
}
