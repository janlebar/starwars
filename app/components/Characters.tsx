import React from 'react';
import ImageForm from './ImageForm';
import type {StarwarsCharacters} from '../utils/api'

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
