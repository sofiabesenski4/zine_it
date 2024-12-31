import React from 'react';
import { Zine } from '../types';
import { Dispatch, SetStateAction, ReactElement } from 'react';
import Container from './Container';

type ZineListingProps = {
  zines: Zine[];
  setCurrentZine: Dispatch<SetStateAction<Zine | null>>;
  children?: ReactElement;
};

const ZineListing: React.FC<ZineListingProps> = (props) => {
  return (
    <div
      data-test-id='zine__listing'
      className='flex gap-4 h-full justify-center flex-wrap overflow-y-auto'
    >
      {props.zines.map((zine) => (
        <Container key={'zine_container__' + zine.id} onClick={() => props.setCurrentZine(zine)}>
          <div data-test='zine' className='mb-2 max-w-9/12'>
            {zine.name}
          </div>
        </Container>
      ))}
    </div>
  );
};

export default ZineListing;
