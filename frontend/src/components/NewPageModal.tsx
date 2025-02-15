import React from 'react';
import Modal from 'react-modal';
import Button from './Button';
import { PageInputs } from '../types';
import { createPage } from '../api';
import { useForm, SubmitHandler } from 'react-hook-form';

interface NewPageModalProps {
  closeModal: () => void;
  zineId: number;
}

const NewPageModal: React.FC<NewPageModalProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PageInputs>();

  const onCreatePageSubmit: SubmitHandler<PageInputs> = (data) => {
    createPage(data).then(props.closeModal());
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={props.closeModal}
      contentLabel='Example Modal'
      className='bg-stone-800'
    >
      <h2>New Page</h2>
      <Button onClick={props.closeModal} text='close'></Button>

      <form onSubmit={handleSubmit(onCreatePageSubmit)}>
        <div className='flex flex-col items-center gap-6'>
          <div className='flex gap-2'>
            <label className='bg-yellow-200 p-2'>Index</label>
            <input {...register('index', { required: true })} />
          </div>
          {errors.index && <span>This field is required</span>}
          <input {...register('zine', { value: props.zineId })} type='hidden' />
          <input
            type='file'
            className='bg-yellow-200'
            accept='image/*'
            {...register('image_url', { required: false })}
          />
          <Button text='Save' />
        </div>
      </form>

      <img src={''} className='img' alt='Uploaded Image Preview' />
    </Modal>
  );
};

export default NewPageModal;
