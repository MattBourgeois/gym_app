export const exerciseOptions = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
	  'X-RapidAPI-Key': process.env.React_app_radid_api_key,
	},
  };
  
  export const youtubeOptions = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
	  'X-RapidAPI-Key': 'b8e2eaedd4msh5c08515617461c8p1a1cb6jsneea1ad3549a9',
	},
  };
  
  export const fetchData = async (url, options) => {
	const res = await fetch(url, options);
	const data = await res.json();
  
	return data;
  };