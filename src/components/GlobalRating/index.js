import React, { PureComponent } from "react";

export default class GlobalRating extends PureComponent {
  isRatingGood(number){
    if (number >= 4) {
      return 'rating--good'
    } else{
      return 'rating--bad'
    }
  }

  render() {
    const {ratingGlobal, ratingNumber} = this.props;
    return (
      <div className={`property-card__rating ${this.isRatingGood(ratingNumber)}`}>
        {ratingGlobal} {ratingNumber}
      </div>
    );
  }
}
