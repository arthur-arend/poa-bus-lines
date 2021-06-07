import axios from "axios";

const api = axios.create({
  baseURL: `http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o`,
});

export default api;
