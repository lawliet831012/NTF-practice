import React, { useEffect, useContext, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import CircularProgress from "@mui/material/CircularProgress";

import { DetailFixedButton, DetailHeader } from "../components";
import { DetailContext } from "../contexts";
import { getNftById } from "../observable";
import useStyle from "../styles/pages/Detail.styles";

const Detail = (props) => {
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
  }, [setDetail, address, id]);

  useEffect(() => {
    //if request failed then return to index page
    if (detail === undefined) {
      setDetail({});
      navigate("/");
    }
  }, [detail, setDetail, navigate]);

  return (
    <div className={classes.container}>
      {isEmpty(detail) ? (
        <CircularProgress />
      ) : (
        <>
          <DetailHeader name={detail.name} />
          <img className={classes.image} src={detail.image_url} alt="" />

          <h1>{detail.name}</h1>
          <h2>{detail.description}</h2>
          <DetailFixedButton url={detail.permalink} />
        </>
      )}
    </div>
  );
};

export default Detail;
