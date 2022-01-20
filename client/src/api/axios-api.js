import axios from "axios";



const baseURL = process.env.NODE_ENV === "production" ? "api/" :  "http://localhost:3001/api/";

// const paramsUrl = process.env.NODE_ENV === "production" ? `/${countryId}` : `/countries/${countryId}`;

export default axios.create({
  baseURL
});

// axios.create({
//   baseURL: 'https://some-domain.com/api/',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });
