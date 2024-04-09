import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e7351d520e2a4255b10f87de43b7dc4a'
    }
  });