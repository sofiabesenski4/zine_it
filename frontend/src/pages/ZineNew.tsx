import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import Button from '../components/Button';
import { useState, useEffect } from 'react';
import { Zine, ZineInputs } from '../types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createZine, loadZines } from '../api'

type ZineNewProps = {
  setShowZineForm: Dispatch<SetStateAction<boolean>>
  setZines: Dispatch<SetStateAction<Zine[]>>
}

const ZineNew: React.FC<ZineNewProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ZineInputs>();

  const onCreateZineSubmit: SubmitHandler<ZineInputs> = (data) => {
    createZine(data)
    .then(() => loadZines(props.setZines, setLoading))
    .then(() => props.setShowZineForm(false));
  };

  return (
    <form onSubmit={handleSubmit(onCreateZineSubmit)}>
      <div className='flex flex-col items-center gap-6'>
        <label className='text-slate-100'>Name</label>
        <input {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}
        <Button text='Save' />
      </div>
    </form>

  )
}

export default ZineNew
