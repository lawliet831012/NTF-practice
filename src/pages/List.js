import React, { useEffect, useContext, useMemo, useCallback } from "react";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

import { NftCard } from "../components";
import { ListContext } from "../contexts";
import { getNftList } from "../observable";
import useStyle from "../styles/pages/List.styles";

const List = (props) => {
  const { list, setList } = useContext(ListContext);
  const classes = useStyle();

  useEffect(() => {
    //call get list while first render
    getNftList(setList);
    //empty list while leave
    return () => setList([]);
  }, [setList]);

  const renderList = useMemo(
    () =>
      list.map((nft) => (
        <Grid item key={nft.id}>
          <NftCard nftInfo={nft} />
        </Grid>
      )),
    [list]
  );

  return (
    <Grid container spacing={2} className={classes.container}>
      {renderList}
    </Grid>
  );
};

export default List;
