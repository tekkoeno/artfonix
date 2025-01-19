import React from 'react';
import { useState } from 'react';

const ReviewsItem = ({
  id,
  user_name = 'Undefined',
  user_photo = 'undefined',
  text = 'loremipsum',
  social = 'undefined',
}) => {
  const photoPath = `${process.env.PUBLIC_URL}/${user_photo}`;
  const [showMore, setShowMore] = useState(false);
  const onTextShowMore = () => {
    setShowMore((currentValue) => !currentValue);
  };
  return (
    <div className="reviews__item">
      <div className="reviews__item-user">
        <img src={photoPath} alt="review" />
        <div className="item__user-info">
          <p className="item__user-name">{user_name}</p>
          <p className="item__user-social">{social}</p>
        </div>
      </div>
      <div className={`${showMore ? 'review__text-block--show' : 'review__text-block'}`}>
        <p className="review__item-text">{text}</p>
      </div>

      {text.length > 323 ? (
        <p className="review__item-more" onClick={onTextShowMore}>
          {showMore ? 'Скрыть' : 'Показать полностью'}
        </p>
      ) : (
        ''
      )}
    </div>
  );
};

export default ReviewsItem;
