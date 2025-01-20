import React from 'react';
import Button from '../components/Button';
import ActionBar from '../components/ActionBar';
import { ZineInputs } from '../types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createZine } from '../api';
import { useNavigate } from 'react-router';

const ZineNew = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ZineInputs>();

  const onCreateZineSubmit: SubmitHandler<ZineInputs> = (data) => {
    createZine(data);
    navigate('/');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onCreateZineSubmit)}>
        <div className='flex flex-col items-center gap-6'>
          <label className='text-slate-100'>Name</label>
          <input {...register('name', { required: true })} />
          {errors.name && <span>This field is required</span>}
          <Button text='Save' />
        </div>
      </form>
      <ActionBar>
        <Button text='Zine Index' destination='/' />
      </ActionBar>
    </>
  );
};

export default ZineNew;
