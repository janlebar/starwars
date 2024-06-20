import axios from 'axios';

// Definram tipe za taypscript
export interface StarwarsCharacters {
  id: string;
  url: string;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}


export const fetchCharacter = async (id: number): Promise<StarwarsCharacters | null> => {
  try {
    // uporabim axios kot omenjeno v navodilih za fetchanje
    const response = await axios.get<StarwarsCharacters>(`https://swapi.dev/api/people/${id}/`);
    return response.data;  
  } catch (error) {
    console.error("Error fetching data from API", error);
    return null;
  }
};
