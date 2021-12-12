import axios from "axios";

const instance = axios.create({
  timeout: 3000,
});

export const GET = (path, parameters = {}, config = {}) =>
  instance.get(path, { ...config, params: parameters });
