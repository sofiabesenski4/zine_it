import NavigationBar from '../components/NavigationBar';
import { Outlet } from 'react-router';
import React from 'react';

const NavigationLayout = () => {
  return (
    <div className='App flex flex-col gap-4 h-screen w-screen bg-stone-800 overflow-hidden'>
      <NavigationBar showHeroBanner={true} />
      <Outlet />
    </div>
  );
};

export default NavigationLayout;
