import { Zine, ZineInputs, PageInputs } from './types';
import { Dispatch, SetStateAction } from 'react';

const createZine = async (zineFields: ZineInputs) => {
  const url = 'http://localhost:8000/uploader/zines/';

  return await fetch(url, {
    body: JSON.stringify(zineFields),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    method: 'POST'
  });
};

const deleteZine = async (zine: Zine): Promise<Response> => {
  const url = `http://localhost:8000/uploader/zines/${zine.id}/`;

  return await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    method: 'DELETE'
  });
};

const loadZines = async (
  setZines: Dispatch<SetStateAction<Zine[]>>,
  setLoading: Dispatch<SetStateAction<boolean>>
): Promise<Zine[]> => {
  setLoading(true);
  const response = await fetch('http://localhost:8000/uploader/zines.json');
  const json = await response.json();
  await setZines(json);
  await setLoading(false);
  return json;
};

const fetchZineDetails = async (
  zineId: number,
  setLoading: Dispatch<SetStateAction<boolean>>
): Promise<Zine> => {
  setLoading(true);
  const response = await fetch(`http://localhost:8000/uploader/zines/${zineId}`);
  const json = await response.json();
  await setLoading(false);
  return json;
};

const createPage = async (pageFields: PageInputs) => {
  const url = 'http://localhost:8000/uploader/pages/';
  const formData = new FormData();
  formData.append('index', pageFields.index);
  formData.append('zine', pageFields.zine);
  formData.append('image_url', pageFields.image_url[0]);

  return await fetch(url, {
    body: formData,
    method: 'POST'
  });
};

const updatePage = async (id: number, index: number) => {
  const url = `http://localhost:8000/uploader/pages/${id}/`;
  const formData = new FormData();

  formData.append('index', index);

  return await fetch(url, {
    body: formData,
    method: 'PUT'
  });
};

export { deleteZine, loadZines, fetchZineDetails, createZine, createPage, updatePage };
