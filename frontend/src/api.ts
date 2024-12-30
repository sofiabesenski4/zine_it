import { Zine, ZineInputs } from './types';

export async function createZine(zineFields: ZineInputs) {
  const url = 'http://localhost:8000/uploader/zines/';

  return await fetch(url, {
    body: JSON.stringify(zineFields),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    method: 'POST'
  });
}

export async function deleteZine(zine: Zine) {
  const url = `http://localhost:8000/uploader/zines/${zine.id}/`;

  return await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    method: 'DELETE'
  });
}

export async function fetchZines(setLoading: (loading: boolean) => { null }) {
  setLoading(true);
  const response = await fetch('http://localhost:8000/uploader/zines.json');
  const json = await response.json();
  await setLoading(false);
  return json;
}

export async function fetchPages(zine: Zine, setLoading: (loading: boolean) => { void }) {
  setLoading(true);
  const response = await fetch(`http://localhost:8000/uploader/pages?zine=${zine.id}`);
  const json = await response.json();
  await setLoading(false);
  return json;
}
