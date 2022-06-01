import axios from "axios";
//const baseURL="https://gorest.co.in/";
const baseURL="https://api.torentx.org:3005/";
const getStoredAuthToken = () =>{
    return localStorage.token
};



function getHeaders() {
  return {
      accept: 'application/json',
      authorization: `Bearer ${ getStoredAuthToken() }`,
  };
}

function postHeaders() {
  return {
      'content-type': 'application/json',
      authorization: `Bearer ${ getStoredAuthToken() }`,
  };
}

export const getRequest = ( endpoint, data = null ) => axios
    .get(`${baseURL}${endpoint}?${new URLSearchParams(data).toString()}`, { headers: getHeaders() } )
    .then( res => res.data)
    .catch(( err ) =>{
      console.log( `Error in get request to entpoint ${ endpoint }`, err )
      throw err;
    });

export const postRequest = ( endpoint, data = null ) => axios
    .post( baseURL + endpoint, data, { headers: postHeaders() } )
    .then( res => res.data)
    .catch( ( err ) => {
      console.log( `Error in post request to entpoint ${ endpoint }`, err )
        throw err;
    });