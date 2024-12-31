import './HeroBanner.css';
import { ReactElement } from 'react';
import React from 'react';

type HeroBannerProps = {
  children: ReactElement;
};

const HeroBanner: React.FC<HeroBannerProps> = (props) => {
  return (
    <div className='ripped-border w-screen bg-[#f4f2e7]'>
      <h1 className='text-3xl text m-auto w-36 font-bold underline'>Zine it!</h1>
      {props.children}
    </div>
  );
};

export default HeroBanner;
