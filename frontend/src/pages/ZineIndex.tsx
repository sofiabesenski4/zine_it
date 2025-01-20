import '../App.css';
import ActionBar from '../components/ActionBar';
import ButtonLink from '../components/ButtonLink';
import React from 'react';
import { useState, useEffect } from 'react';
import { Zine } from '../types';
import Container from '../components/Container';
import { Link } from 'react-router';
import { loadZines } from '../api';

const ZineIndex = () => {
  const [zines, setZines] = useState<Zine[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Always start by showing all zines in the database.
  useEffect(() => {
    loadZines(setZines, setLoading);
  }, []);

  return (
    <>
      <div
        data-test-id='zine__listing'
        className='flex gap-4 h-full justify-center flex-wrap overflow-y-auto'
      >
        {loading ? (
          'Loading'
        ) : (
          <>
            {zines.map((zine) => (
              <Container key={'zine_container__' + zine.id}>
                <Link to={`/zines/${zine.id}`}>
                  <div data-test='zine' className='mb-2 max-w-9/12'>
                    {zine.name}
                  </div>
                </Link>
              </Container>
            ))}
          </>
        )}
      </div>
      <ActionBar>
        <ButtonLink text='New Zine' destination='/zines/new' />
      </ActionBar>
    </>
  );
};

export default ZineIndex;
