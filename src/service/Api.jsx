import axios from 'axios';

const url = 'https://e-com-server-4tx7wd1ou-akansha-1202.vercel.app/api';
// const url="http://localhost:9000/api"

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/register`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
        return error.response;
    }
}