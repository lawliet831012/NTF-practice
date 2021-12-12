import { from } from 'rxjs';

import { GET } from '../utils/restful';

const owner = '0x960DE9907A2e2f5363646d48D7FB675Cd2892e91';
const limit = 20;

export const getNftList = setList => {
  let offset = 0;
  const getData = () =>
    GET('https://api.opensea.io/api/v1/assets', { owner, offset, limit });

  from(getData()
    .catch(err => console.error(err)))
    .subscribe(async function(res) {
      const result = [...res.data.assets];
      setList(result);
      let length = res.data.assets.length;
      while (length === limit) {
        //keep calling until all data are fetched
        offset += limit;
        const subRes = await getData();
        result.push(...subRes.data.assets);
        length = subRes.data.assets.length;
        //set new reference of result array
        setList([...result]);
      }
    });
};

export const getNftById = (setDetail, address, id) => {
  from(GET(`https://api.opensea.io/api/v1/asset/${address}/${id}`)
    .catch(err => setDetail(undefined)))
    .subscribe(res => setDetail(res.data));
};
