import axios from 'axios';
import { useEffect, useState } from 'react';
import { reqInterface } from '../interfaces';

type ResponseType = reqInterface[];

function useAxios(url:string, storageKey?:string): [ResponseType | null, boolean] {
  const [response, setResponse] = useState<ResponseType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if(storageKey) {
      let item = localStorage.getItem(storageKey);

      if(item) {
        setResponse(JSON.parse(item));
        setLoading(false);
        return;
      }
    }

    (async () => {
      try {
        const resp = await axios.get(url);
        const data = await resp.data;

        setResponse(data);
        setLoading(false);

        if(storageKey) {
          localStorage.setItem(storageKey, JSON.stringify(data));
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [url, storageKey]);

  return [response, loading];
}

export default useAxios;