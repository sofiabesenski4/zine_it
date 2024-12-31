import React from 'react';
import HeroBanner from './HeroBanner';

type NavigationBarProps = {
  showHeroBanner: boolean;
};

const NavigationBar: React.SFC<NavigationBarProps> = (props) => {
  return (
    <div className='flex flex-col items-center justify-start gap-8 w-full'>
      <div className='App-logo self-start h-10 w-10' alt='logo'>
        <svg src='../squatter-z.svg' />
      </div>
      {props.showHeroBanner ? (
        <HeroBanner>
          <div className='m-2'>Open Source Zine Photocopier</div>
        </HeroBanner>
      ) : null}
    </div>
  );
};

export default NavigationBar;
