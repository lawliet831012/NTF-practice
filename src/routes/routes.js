import { Routes, Route } from "react-router-dom";

import Layout from './Layout';
import { List, Detail } from "../pages";

const Main = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<List />} />
      <Route path="detail" element={<Detail />} />
    </Route>
  </Routes>
);

export default Main;
