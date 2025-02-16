import React from 'react';
import HeroBanner from './HeroBanner';
import SquatterZ from '../squatter-z.svg';

type NavigationBarProps = {
  showHeroBanner: boolean;
};

const NavigationBar: React.FC<NavigationBarProps> = (props) => {
  return (
    <div className='flex flex-col items-center justify-start gap-8 w-full'>
      <div className='App-logo self-start h-10 w-10'></div>
      {props.showHeroBanner ? (
        <div className='relative'>
          <HeroBanner>
            <img
              src={SquatterZ}
              width={50}
              height={50}
              className='App-logo absolute top-2 left-2'
            />

            <div>Open Source Zine Photocopier</div>
          </HeroBanner>
        </div>
      ) : null}
    </div>
  );
};

export default NavigationBar;
