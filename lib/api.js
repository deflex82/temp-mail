import axios from "axios";

const createtempmail =  async()=>{
  

const options = {
  method: 'GET',
  url: 'https://temp-mail94.p.rapidapi.com/new-mail',
  headers: {
    'X-RapidAPI-Key': '4e4de0ad11mshd09cd6e6bc2d4cap132f8djsn2ad94410bc31',
    'X-RapidAPI-Host': 'temp-mail94.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
  localStorage.setItem("email",response.data.email);
  localStorage.setItem("token",response.data.token);

	
    return response.data;
} catch (error) {
    
	console.error(error);
}
}

export default createtempmail;