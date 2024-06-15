import axios from 'axios';

export const fetchCharacter = async () => {
  try {
    const response = await axios.get('https://swapi.dev/api/people/5/');
    return response.data;  // Returns the single character's data
  } catch (error) {
    console.error("Error fetching data from API", error);
    return null;
  }
};
