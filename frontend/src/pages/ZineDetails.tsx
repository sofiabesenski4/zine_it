import React from 'react';
import { useEffect, useState } from 'react';
import ActionBar from '../components/ActionBar';
import ButtonLink from '../components/ButtonLink';
import Button from '../components/Button';
import PageModal from '../pages/PageModal';
import { Zine, Page } from '../types';
import { fetchZineDetails, deleteZine } from '../api';
import { useParams, useNavigate } from 'react-router';

type PageCardProps = {
  page: Page;
};
const PageCard: React.FC<PageCardProps> = (props) => {
  return (
    <div className='flex flex-col bg-slate-400 h-32 w-20'>
      <div>id: {props.page.id}</div>
      <div>idx: {props.page.index}</div>
      <img src={props.page.image_url} alt='page' />
    </div>
  );
};

const ZineDetails = () => {
  const navigate = useNavigate();
  const { zineId } = useParams();
  const [zine, setZine] = useState<Zine | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchZineDetails(Number(zineId), setLoading).then((zineDetails) => {
      setZine(zineDetails);
      setPages(zineDetails.pages);
    });
  }, [zineId]);

  const onDeleteClick = () => {
    setLoading(true);
    deleteZine(zine).then((json) => {
      setLoading(false);
      if (json.ok == true) {
        navigate('/');
      } else {
        console.log('Error');
        console.log(json);
      }
    });
  };

  function openModal() {
    setModalIsOpen(true);
  }

  const closeModal = async () => {
    fetchZineDetails(Number(zineId), setLoading)
      .then((zineDetails) => {
        setZine(zineDetails);
        setPages(zineDetails.pages);
      })
      .then(() => {
        setModalIsOpen(false);
      });
  };

  return (
    <>
      {loading ? (
        'Loading'
      ) : (
        <div className='flex grow overflow-y-auto justify-start flex-col items-center gap-6 w-screen'>
          <div className='bg-yellow-200'>{zine.name}</div>
          {loading ? (
            <p>Loading</p>
          ) : (
            <div className='flex flex-start flex-wrap justify-center gap-4 overflow-y-auto max-h-fit w-9/12'>
              {pages.map((page) => {
                return (
                  <div className='shrink-0' key={'zine_' + zineId + '_page_' + page.id}>
                    <PageCard page={page}></PageCard>
                  </div>
                );
              })}
            </div>
          )}

          <ActionBar>
            <Button text='New Page' onClick={openModal} />
            <Button text='Delete Zine' onClick={onDeleteClick} />
            <ButtonLink text='Zine Listing' destination='/' />
          </ActionBar>

          {modalIsOpen && <PageModal closeModal={closeModal} zineId={zineId}></PageModal>}
        </div>
      )}
    </>
  );
};

export default ZineDetails;
