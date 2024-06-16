import React from 'react';
import ImageForm from './ImageForm'; // Adjust the import path as necessary

const Characters = ({ initialAttributesArray, onChange }) => {
    return (
        <div className="relative flex gap-6 h-[614.24px]">
            {initialAttributesArray.map((attributes, index) => (
                <ImageForm
                    key={index}
                    initialAttributes={attributes}
                    onChange={(newAttributes) => onChange(index, newAttributes)}
                    imageUrl={`../public/${index + 1}.jpeg`} // Ensure this path matches your public folder setup
                />
            ))}
        </div>
    );
};

export default Characters;
