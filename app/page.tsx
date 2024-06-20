"use client";

import React, { useEffect, useState } from 'react';
import { fetchCharacter } from './utils/api';
import Header from './components/Header';
import Characters, {StarwarsCharacters} from './components/Characters';


const MainPage: React.FC = () => {
  const [characters, setCharacters] = useState<StarwarsCharacters[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCharacters = async () => {
      const characterIds = [1, 4, 10]; 
      const fetchedCharacters = await Promise.all(characterIds.map(id => fetchCharacter(id)));

      const initialAttributesArray = fetchedCharacters
        .filter((fetchedCharacter): fetchedCharacter is StarwarsCharacters => fetchedCharacter !== null)
        .map((fetchedCharacter, index) => ({
          id: fetchedCharacter.url.split('/').filter(Boolean).pop() as string,
          url: fetchedCharacter.url,
          name: fetchedCharacter.name,
          height: fetchedCharacter.height,
          mass: fetchedCharacter.mass,
          hair_color: fetchedCharacter.hair_color,
          skin_color: fetchedCharacter.skin_color,
          eye_color: fetchedCharacter.eye_color,
          birth_year: fetchedCharacter.birth_year,
          gender: fetchedCharacter.gender,
        }));

      setCharacters(initialAttributesArray);
      setLoading(false);
    };

    getCharacters();
  }, []);

  const handleAttributesChange = (index: number, newAttributes: StarwarsCharacters) => {
    setCharacters(oldArray => {
      const newArray = [...oldArray];
      newArray[index] = newAttributes;
      return newArray;
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: 'black' }}>
      <Header />
      <div className="mt-[127px] drop-shadow-[0_0_250px_rgba(227,214,29,0.4)] pb-40">
        {characters.length ? (
          <Characters
            initialAttributesArray={characters}
            onChange={handleAttributesChange}
          />
        ) : (
          <div>Error loading character data.</div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
