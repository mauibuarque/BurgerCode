import axios from "axios";

const baseURL = "https://hamburgueria-kenzie-json-serve.herokuapp.com";
const burgerAPI = axios.create({ baseURL, timeout: 5 * 1000 });

export default burgerAPI;
