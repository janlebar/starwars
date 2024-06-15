import axios from 'axios';

export const fetchCharacters = async () => {
  try {
    const response = await axios.get('https://swapi.dev/api/people/1/');
    return response.data.results;
  } catch (error) {
    console.error("Error api data", error);
    return [];
  }
};