import React, { useEffect, useContext, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
    if (detail === undefined) {
      setDetail({});
      navigate("/");
    }
  }, [detail, setDetail, navigate]);

  console.log(detail);

  return (
    <div className={classes.container}>
      <DetailHeader name={detail.name} />
      <div>
        <img src={detail.image_url} alt="" />
      </div>

      <h1>{detail.name}</h1>
      <h2>{detail.description}</h2>
      <DetailFixedButton url={detail.permalink} />
    </div>
  );
};

export default Detail;
