"use client";

import React, { useEffect, useState } from 'react';
import { fetchCharacter } from './utils/api';
import Header from './components/Header';
import Characters from './components/Characters';


const MainPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      const characterIds = [1, 4, 10]; // IDs of the characters to fetch
      const fetchedCharacters = await Promise.all(characterIds.map(id => fetchCharacter(id)));
      
      const initialAttributesArray = fetchedCharacters.map((fetchedCharacter, index) => ({
        id: fetchedCharacter.url.split('/').filter(Boolean).pop(), // Extract ID from URL
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

  const handleAttributesChange = (index, newAttributes) => {
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
    <div>
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
