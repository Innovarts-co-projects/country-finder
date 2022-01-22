import axios from 'axios';
import { useEffect, useState } from 'react';
import { reqInterface } from '../interfaces';

type ResponseType = reqInterface[];

function useAxios(url: string): [ResponseType | null, boolean] {
  const [response, setResponse] = useState<ResponseType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get(url);
        const data = await resp.data;

        setResponse(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [url]);

  return [response, loading];
}

export default useAxios;