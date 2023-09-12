import  axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url:BASE_URL ,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const  fetchFromAPI = async (url)=>
  {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }


  // "b6609562a1msh0e74ee572478860p1267c1jsn5133c530c086"