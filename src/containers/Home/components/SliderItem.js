import React from 'react';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { COMMON_NAME } from '~/constants/common-values';

const SliderItem = ({ path, subTitle, title, imgs, alt }) => {
  return (
    <figure>
      <picture>
        <source media="(max-width: 900px)" srcSet={imgs}></source>
        <source></source>
        <img src={imgs} alt={alt} />
      </picture>
      <figcaption>
        <Link to={path}>
          <div>
            <strong>{subTitle}</strong>
            <p>{title}</p>
            <Button>{COMMON_NAME.shopNow}</Button>
          </div>
        </Link>
      </figcaption>
    </figure>
  );
};

export default SliderItem;
