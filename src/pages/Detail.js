import React, { useEffect, useContext, useMemo } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { DetailContext } from "../contexts";
import { getNftById } from "../observable";
import useStyle from '../styles/pages/Detail.styles';

const Detail = props => {
  const params = useParams();
  const navigate = useNavigate();
  const { address, id } = params;
  const { detail, setDetail } = useContext(DetailContext);
  const classes = useStyle();

  useEffect(() => {
    //call get detail while first render
    getNftById(setDetail, address, id);
    //empty detail while leave
    return () => setDetail({});
  }, [setDetail, address, id])

  useEffect(() => {
    if(detail === undefined) {
      setDetail({})
      navigate('/');
    }
  }, [detail, setDetail, navigate])



  return <></>;
}

export default Detail;
