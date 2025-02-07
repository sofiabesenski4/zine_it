import React from 'react';
import { useRef, useState } from 'react';
import Modal from 'react-modal';
import Button from './Button';
import { PageInputs } from '../types';
import { useForm, SubmitHandler } from 'react-hook-form';

interface NewPageModalProps {
  closeModal: () => void;
}

const NewPageModal: React.FC<NewPageModalProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PageInputs>();

  const onCreatePageSubmit: SubmitHandler<PageInputs> = (data) => {
    // createPage(data).then(() => navigate('/'));
    console.log(data);
    props.closeModal();
  };

  const imageUrlRef = useRef<any>(null);
  const [preview, setPreview] = useState<string | null>();
  const { ref: registerRef, ...rest } = register("index");
  const handleUploadedFile = (event: Event) => {
    if (!event.target)
      return;

    const target = event.target as HTMLInputElement;

    if (!target.files)
      return;

    const file = target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };
  const onUpload = () => {
    if (!imageUrlRef || !imageUrlRef.current)
      return;

    imageUrlRef.current.click();
  };

  const uploadButtonLabel =
    preview ? "Change image" : "Upload image";

  return (
    <Modal isOpen={true} onRequestClose={props.closeModal} contentLabel='Example Modal'>
      <h2>New Page</h2>
      <Button onClick={props.closeModal} text='close'></Button>

      <form onSubmit={handleSubmit(onCreatePageSubmit)}>
        <div className='flex flex-col items-center gap-6'>
          <label className='text-slate-100'>Index</label>
          <input {...register('index', { required: true })} />
          {errors.index && <span>This field is required</span>}

          <input {...rest}
            type="file"
            onChange={handleUploadedFile}
            ref={(e) => {
              imageUrlRef.current = e;
            }}
            name="imageUrl" />

          <Button text='Upload' onClick={onUpload} />
          <Button text='Save' />
        </div>
      </form>
    </Modal>
  );
};

export default NewPageModal;
