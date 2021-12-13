import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import useStyle from '../styles/compnents/DetailHeader.style';

const DetailHeader = props => {
  const classes = useStyle()
  const navigate = useNavigate();

  const toBack = useCallback(() => navigate(-1), [navigate]);
  return <div className={classes.headerBar}>
    <div className={classes.headerBack} onClick={toBack}/>
    <h3>{props.name}</h3>
  </div>;;
};

export default DetailHeader;
