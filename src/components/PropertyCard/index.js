import React, { PureComponent, Fragment } from "react";

export default class PropertyCard extends PureComponent {
  renderHeading(isMobile, Property) {
    if (!isMobile) {
      return <div className='property-card__title'><h4>{Property.listingTitle}</h4></div>;
    }
  }

  renderStars (){
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="85" height="16" viewBox="0 0 85 16">
        <g fill="none" fill-rule="evenodd">
          <path fill="#FDD94D" fill-rule="nonzero" d="M13.9,5.7 L10.5,9.1 L11.4,13.6 L11.3,13.9 L10.9,13.9 L7,11.4 L3.1,13.9 L2.8,13.9 C2.7,13.8 2.6,13.7 2.7,13.6 L3.6,9.1 L0.1,5.7 L-3.33066907e-16,5.4 C0.1,5.3 0.1,5.2 0.3,5.2 L4.8,5.2 L6.8,0.1 L7,-3.33066907e-16 L7.3,0.2 L9.3,5.3 L13.8,5.3 L14.1,5.5 L13.9,5.7 Z M66.4,5.7 L63,9.1 L63.9,13.6 L63.8,13.9 L63.4,13.9 L59.5,11.4 L55.6,13.9 L55.3,13.9 C55.2,13.8 55.1,13.7 55.2,13.6 L56.1,9.1 L52.7,5.7 L52.6,5.4 C52.7,5.3 52.7,5.2 52.9,5.2 L57.4,5.2 L59.4,0.1 L59.5,-3.33066907e-16 L59.8,0.2 L61.8,5.3 L66.3,5.3 L66.6,5.5 L66.4,5.7 Z M48.9,5.7 L45.5,9.1 L46.4,13.6 L46.3,13.9 L45.9,13.9 L42,11.4 L38.1,13.9 L37.8,13.9 C37.7,13.8 37.6,13.7 37.7,13.6 L38.6,9.1 L35.2,5.7 C35,5.7 35,5.6 35,5.4 C35.1,5.3 35.1,5.2 35.3,5.2 L39.8,5.2 L41.8,0.1 L42,-3.33066907e-16 L42.3,0.2 L44.3,5.3 L48.8,5.3 L49.1,5.5 L48.9,5.7 Z M28,9.1 L28.9,13.6 L28.8,13.9 L28.4,13.9 L24.5,11.4 L20.6,13.9 L20.3,13.9 C20.2,13.8 20.1,13.7 20.2,13.6 L21.1,9.1 L17.7,5.7 L17.6,5.4 C17.7,5.3 17.7,5.2 17.9,5.2 L22.4,5.2 L24.4,0.1 L24.5,-3.33066907e-16 L24.8,0.2 L26.8,5.3 L31.3,5.3 L31.6,5.5 L31.4,5.7 L28,9.1 Z"/>
          <path fill="#D7D8DA" d="M80.5,9.1 L81.4,13.6 L81.3,13.9 L80.9,13.9 L77,11.4 L73.1,13.9 L72.8,13.9 C72.7,13.8 72.6,13.7 72.7,13.6 L73.6,9.1 L70.2,5.7 C70,5.7 70,5.6 70,5.4 C70.1,5.3 70.1,5.2 70.3,5.2 L74.8,5.2 L76.8,0.1 L77,0 L77.3,0.2 L79.3,5.3 L83.8,5.3 L84.1,5.5 L83.9,5.7 L80.5,9.1 Z"/>
        </g>
      </svg>
    )
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
      const averageRating = Property.reviewsRatingAverage;
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
            <div className='reviews-rating-stars'>{this.renderStars(averageRating)}</div>
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
