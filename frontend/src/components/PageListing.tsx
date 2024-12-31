import React from 'react';
import { ReactElement, useEffect, useState } from 'react';
import { Zine, Page } from '../types';
import { fetchPages } from '../api';

type PageCardProps = {
  page: Page;
};
const PageCard: React.FC<PageCardProps> = (props) => {
  return (
    <div className='flex flex-col bg-slate-400 h-32 w-20'>
      <div>Page id: {props.page.id}</div>
      <div>index: {props.page.index}</div>
    </div>
  );
};

type PageListingProps = {
  zine: Zine;
  children?: ReactElement;
};

const PageListing: React.FC<PageListingProps> = (props) => {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPages(props.zine, setLoading).then((json) => setPages(json));
  }, [props.zine.id]);

  return (
    <div className='flex grow overflow-y-auto justify-start flex-col items-center gap-6 w-screen'>
      <div className='bg-yellow-200'>{props.zine.name}</div>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className='flex flex-start flex-wrap justify-center gap-4 overflow-y-auto max-h-fit w-9/12'>
          {pages.map((page) => {
            return (
              <div className='shrink-0' key={'zine_' + props.zine.id + '_page_' + page.id}>
                <PageCard page={page}></PageCard>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PageListing;
