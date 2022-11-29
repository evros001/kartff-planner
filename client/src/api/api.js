//TODO: put api requests here as exportable functions
import axios from "axios";

const auth_url = 'http://localhost:5500/api/auth';
const user_url = 'http://localhost:5500/api/users';

/* 
@params token -local storage token 
*/
export const getAuthUser = async (token) => {
  console.log("initial getauthuser token", typeof token);
  const jwt = JSON.parse(token)   
    ? JSON.parse(token).token 
    : token
  console.log("getauthuser jwt", jwt);
  const user  = await axios.get(auth_url, { 
    headers: {"Authorization" : `Bearer ${jwt}`} 
  });
  return user;
}

/* 
@params data - { email, password } 
returns token
*/
export const loginUser = async (data) => {
  const token  = await axios.post(auth_url, data);
  return token;
}

/* 
@params data - { firstName, lastName:, email, password }
*/
export const createUser = async (data) => {
  const response = await axios.post(user_url, data);
  return response;
}
