import { Zine, ZineInputs } from './types';
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

const fetchZines = async (setLoading: Dispatch<SetStateAction<boolean>>): Promise<Zine[]> => {
  setLoading(true);
  const response = await fetch('http://localhost:8000/uploader/zines.json');
  const json = await response.json();
  await setLoading(false);
  return json;
};

const fetchZineDetails = async (
  zine_id: number,
  setLoading: Dispatch<SetStateAction<boolean>>
): Promise<Zine> => {
  setLoading(true);
  const response = await fetch(`http://localhost:8000/uploader/zines/${zine_id}`);
  const json = await response.json();
  await setLoading(false);
  return json;
};

export { deleteZine, fetchZines, fetchZineDetails, createZine };
