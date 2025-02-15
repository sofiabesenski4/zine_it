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
    console.log(data);
  };

  return (
    <Modal isOpen={true} onRequestClose={props.closeModal} contentLabel='Example Modal'>
      <h2>New Page</h2>
      <Button onClick={props.closeModal} text='close'></Button>

      <form onSubmit={handleSubmit(onCreatePageSubmit)}>
        <div className='flex flex-col items-center gap-6'>
          <label className='text-slate-100'>Index</label>
          <input {...register('index', { required: true })} />
          {errors.index && <span>This field is required</span>}
          <input {...register('zine_id', { value: props.zineId })} type='hidden' />
          <Button text='Save' />
        </div>
      </form>
    </Modal>
  );
};

export default NewPageModal;
