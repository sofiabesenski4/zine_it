import React from 'react';
import HeroBanner from './HeroBanner';
import squatterZ from '../squatter-z.svg';

type NavigationBarProps = {
  showHeroBanner: boolean;
};

const NavigationBar: React.SFC<NavigationBarProps> = (props) => {
  return (
    <div className='flex flex-col items-center justify-start gap-8 w-full'>
      <img src={squatterZ} className='App-logo self-start h-10 w-10' alt='logo' />
      {props.showHeroBanner ? (
        <HeroBanner>
          <div className='m-2'>Open Source Zine Photocopier</div>
        </HeroBanner>
      ) : null}
    </div>
  );
};

export default NavigationBar;
