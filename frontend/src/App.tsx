import './App.css';
import React from 'react';
import ActionBar from './components/ActionBar';
import ZineDetails from './components/ZineDetails';
import ZineListing from './components/ZineListing';
import ZineNew from './pages/ZineNew';
import NavigationBar from './components/NavigationBar';
import Button from './components/Button';
import { useState, useEffect } from 'react';
import { Zine, ZineInputs } from './types';
import { useForm } from 'react-hook-form';
import { loadZines } from './api';

const App = () => {
  const [zines, setZines] = useState<Zine[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Always start by showing all zines in the database.
  useEffect(() => {
      loadZines(setZines, setLoading);
  }, []);

  const [showZineForm, setShowZineForm] = useState<boolean>(false);
  const [currentZine, setCurrentZine] = useState<Zine | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ZineInputs>();

  const onDeleteZineSubmit = (zine: Zine) => {
    deleteZine(zine)
    .then(() => loadZines(setZines, setLoading))
    .then(() => setCurrentZine(null));
  };

  // TODO: Use React Router to pull this into a different route.
  return (
    <div className='App h-screen w-screen bg-stone-800 overflow-hidden'>
      {loading ? (
        'Loading'
      ) : (
        <div className='m-auto flex flex-col items-center justify-between gap-8 h-full w-11/12'>
          <NavigationBar showHeroBanner={!currentZine} />
          {currentZine ? (
            <ZineDetails zine={currentZine} />
          ) : (
            <ZineListing zines={zines} setCurrentZine={setCurrentZine} />
          )}
          {showZineForm ? (
            <ZineNew setZines={setZines} setShowZineForm={setShowZineForm} />
          ) : null}
          <ActionBar>
            {!showZineForm && !currentZine ? (
              <Button
                onClick={() => {
                  setCurrentZine(null);
                  setShowZineForm(true);
                }}
                text='New Zine'
              />
            ) : (
              <></>
            )}
            {currentZine ? (
              <Button onClick={() => onDeleteZineSubmit(currentZine)} text='Delete Zine' />
            ) : (
              <></>
            )}
            {showZineForm || currentZine || showZineForm ? (
              <Button
                onClick={() => {
                  setCurrentZine(null);
                  setShowZineForm(false);
                }}
                text='Back'
              />
            ) : (
              <></>
            )}
          </ActionBar>
        </div>
      )}
    </div>
  );
};

export default App;
