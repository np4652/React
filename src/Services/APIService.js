import axios from "axios";
//const baseURL="https://gorest.co.in/";
const baseURL="https://api.torentx.org:3005/";
const getStoredAuthToken = () =>{

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

export const getRequest = ( endpoint, data='' ) => axios
    .get( baseURL + endpoint, data, { headers: getHeaders() } )
    .then( res => res.data)
    .catch(( err ) => err);

export const postRequest = ( endpoint, data ) => axios
    .post( baseURL + endpoint, data, { headers: postHeaders() } )
    .then( res => {
      console.log(res.data)
      //res.data
    })
    .catch( ( err ) => {
      console.log( `Error in post request to entpoint ${ endpoint }`, err )
        //LoggingUtility.error( `Error in post request to entpoint ${ endpoint }`, err );
        // if ( isNetworkError( err ) ) {
        //     throwServerNotReachableError();
        // }
        // const { status } = err.response;
        // if ( isUnauthorizedError( status ) ) {
        //     return refreshAuthToken(
        //         () => postRequest( endpoint, data ),
        //     );
        // }
        throw err;
    });