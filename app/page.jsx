"use client";

import React, { useEffect, useState } from 'react';
import Characters from './components/Edit';
import { fetchCharacter } from './utils/api';
import Header from './components/Header';

const MainPage = () => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacter = async () => {
      const fetchedCharacter = await fetchCharacter();
      if (fetchedCharacter) {
        // Transform API data to match initialAttributes format
        const initialAttributes = {
          id: fetchedCharacter.url.split('/').filter(Boolean).pop(),  // Extract ID from URL
          name: fetchedCharacter.name,
          height: fetchedCharacter.height,
          mass: fetchedCharacter.mass,
          hair_color: fetchedCharacter.hair_color,
          skin_color: fetchedCharacter.skin_color,
          eye_color: fetchedCharacter.eye_color,
          birth_year: fetchedCharacter.birth_year,
          gender: fetchedCharacter.gender,
        };
        setCharacter(initialAttributes);
      }
      setLoading(false);
    };

    getCharacter();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    
      <div>
        <Header />
        <div className="mt-[127px] drop-shadow-[0_0_250px_rgba(227,214,29,0.4)] px-80">
          {character ? (
            <Characters initialAttributes={character} onChange={(attributes) => console.log(attributes)} />
          ) : (
            <div>Error loading character data.</div>
          )}
        </div>
      </div>

  );
};

export default MainPage;





