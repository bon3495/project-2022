import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from '~/components/Button';

const HomeContainer = () => {
  const [count, setCount] = useState(1);

  const handleClick = index =>
    setCount(prev => (prev !== index ? index : prev));

  console.log('re-render', count);

  return (
    <div className="p-4">
      <div className="relative">
        <img
          src="https://cdn.shopify.com/s/files/1/0070/1922/files/homepage_mens_workshop_FishermansSweater-Camel_01_2880.progressive.jpg?v=8957627700515403988"
          alt="slider"
          className="rounded-xl"
        />
        <div className="overlay rounded-xl"></div>
        <div className="absolute top-1/2 -translate-y-1/2 text-white-fff ml-[150px] w-1/4">
          <strong className="text-xs">THE FISHERMAN SWEATER</strong>
          <h2 className="text-4xl mt-3 mb-10">A Seafaring Classic Returns</h2>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div></div>
      </div>
    </div>
  );
};

export default HomeContainer;
