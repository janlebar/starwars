import axios from 'axios';

export const fetchCharacter = async (id) => {
  try {
    const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
    return response.data;  // Returns the single character's data
  } catch (error) {
    console.error("Error fetching data from API", error);
    return null;
  }
};