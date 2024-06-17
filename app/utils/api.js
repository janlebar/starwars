import axios from 'axios';

export const fetchCharacter = async (id) => {
  try {
    // z knjižnco axios namesto navadnega fetcha dobim vrednosti iy apija glede na id
    const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
    return response.data;  
  } catch (error) {
    console.error("Error fetching data from API", error);
    return null;
  }
};