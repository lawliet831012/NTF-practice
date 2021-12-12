import { useState, useCallback } from 'react';

const useNft = () => {
  const [list, setList] = useState([]);

  const getList = useCallback(() => {

  }, []);

  return { list, getList };
};

export default useNft;
