import React from 'react';
import Modal from 'react-modal';
import Button from '../components/Button';
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
    createPage(data).then(() => {
      props.closeModal();
    });
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={props.closeModal}
      contentLabel='Example Modal'
      className='App bg-stone-800'
      style={{
        content: {
          position: 'absolute',
          top: '100px',
          left: 0,
          right: 0,
          bottom: '200px'
        }
      }}
    >
      <div className='flex flex-col h-full justify-between p-2'>
        <h2 className='mt-10'>
          <span className='bg-yellow-200'>New Page</span>
        </h2>

        <form onSubmit={handleSubmit(onCreatePageSubmit)}>
          <div className='flex flex-col justify-center items-center gap-6'>
            <div className='flex gap-2'>
              <input {...register('index', { required: true })} value={1} type='hidden' />
            </div>
            {errors.index && <span>This field is required</span>}
            <input {...register('zine', { value: props.zineId })} type='hidden' />
            <input
              {...register('image_url', { required: false })}
              type='file'
              className='bg-yellow-200'
              accept='image/*'
            />
            <Button text='Save' className='' />
          </div>
        </form>

        <img src={''} className='img' alt='Uploaded Image Preview' />
        <Button className={'self-end'} onClick={props.closeModal} text='Close' />
      </div>
    </Modal>
  );
};

export default NewPageModal;
