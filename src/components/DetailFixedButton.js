import React, { useCallback } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import useStyle from "../styles/compnents/DetailFixedButton.style";

const DetailFixedButton = (props) => {
  const classes = useStyle();
  const navigate = useNavigate();

  const toUrl = useCallback(() => (window.location.href = props.url), [
    props.url,
  ]);
  return (
    <div className={classes.bottomBar}>
      <Button fullWidth variant="contained" onClick={toUrl}>
        {props.url}
      </Button>
    </div>
  );
};

export default DetailFixedButton;
