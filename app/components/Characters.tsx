import React from 'react';
import ImageForm from './ImageForm';

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

interface CharactersProps {
  initialAttributesArray: StarwarsCharacters[];
  onChange: (index: number, newAttributes: StarwarsCharacters) => void;
}

const Characters: React.FC<CharactersProps> = ({ initialAttributesArray, onChange }) => {
  return (
    <div className="relative flex flex-wrap gap-6 md:max-h-full justify-center">
      {initialAttributesArray.map((attributes, index) => (
        <ImageForm
          key={index}
          initialAttributes={attributes}
          onChange={(newAttributes) => onChange(index, newAttributes)}
          imageUrl={`./images/${index + 1}.jpeg`}
        />
      ))}
    </div>
  );
};

export default Characters;
