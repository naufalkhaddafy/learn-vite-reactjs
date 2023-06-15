import axios from 'axios';
import { useEffect, useState } from 'react';

const useSurat = () => {
  const [surat, setSurat] = useState('');

  useEffect(() => {
    const getSurat = async () => {
      const { data } = await axios(`https://equran.id/api/v2/surat`);
      setSurat(data.data);
      console.log(data.data);
    };
    getSurat().then((r) => r);
  }, []);
  return surat;
};
export default useSurat;
