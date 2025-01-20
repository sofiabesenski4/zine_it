import { ReactElement } from 'react';
import React from 'react';

type ActionBarProps = {
  children: ReactElement[];
};

const ActionBar: React.FC<ActionBarProps> = (props) => {
  return <div className='mb-8 flex justify-center gap-2'>{props.children}</div>;
};

export default ActionBar;
