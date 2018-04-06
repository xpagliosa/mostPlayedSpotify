import { AsyncStorage } from 'react-native';
import { create } from 'apisauce';

var binaryToBase64 = require('binaryToBase64');
var utf8 = require('utf8');

const clientId = "52d71b13c5d24cb3a44f8ab04dbc5eb6";
const clientSecret = "877de743f4e6463da421ebbc6d1de9e8";

const spotifyCredentials = binaryToBase64(utf8.encode(`${clientId}:${clientSecret}`));

// console.log(spotifyCredentials);

const login = create({
  baseURL: 'https://accounts.spotify.com/api',
  headers: {
    'Content-Type':'application/x-www-form-urlencoded',
    'Authorization': `Basic ${spotifyCredentials}`,
  },
  params: {
    grant_type: 'client_credentials'
  }
});

login.addAsyncRequestTransform(request => async () => {
  console.log(request);
});

login.addResponseTransform(response => {
  console.log(response);
  if (!response.ok) throw response;
});

export default login;
