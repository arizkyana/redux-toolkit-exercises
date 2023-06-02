import axios from 'axios';

const baseURL = 'https://bootcamp-rent-cars.herokuapp.com/';

const network = axios.create({
  baseURL,
});

export default network;
