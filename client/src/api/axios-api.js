import axios from "axios";



const baseURL = process.env.NODE_ENV === "production" ? "api/" :  "http://localhost:4000/api/";


export default axios.create({
  baseURL
});

// axios.create({
//   baseURL: 'https://some-domain.com/api/',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });
