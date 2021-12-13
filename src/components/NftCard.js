import React, { useCallback } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";

import useStyle from '../styles/compnents/NftCard.style';

const NftCard = (props) => {
  const { nftInfo } = props;
  const navigate = useNavigate();

  const classes = useStyle();

  const toDetail = useCallback(
    () => navigate(`/${nftInfo.asset_contract.address}/${nftInfo.token_id}`),
    [navigate, nftInfo]
  );

  return (
    <Card className={classes.card} onClick={toDetail}>
      <CardMedia component="img" height="140" image={nftInfo.image_url} />
      <CardContent>{nftInfo.name}</CardContent>
    </Card>
  );
};

export default NftCard;
