import React, { useState } from 'react';

const Characters = ({ initialAttributes, onChange }) => {
  const [attributes, setAttributes] = useState(initialAttributes);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleChange = (attributeName) => (event) => {
    setAttributes(oldValue => ({
      ...oldValue,
      [attributeName]: event.target.value
    }));
  };

  const handleEditClick = () => {
    if (isEditMode) {
      onChange(attributes); // Save changes when exiting edit mode
    }
    setIsEditMode(!isEditMode); // Toggle edit mode
  };

  const inputStyle = {
    backgroundColor: isEditMode ? 'white' : 'transparent',
    border: isEditMode ? '1px solid black' : 'none',
  };

  return (
    <div className="relative flex gap-0 h-[614.24px]">
      <div className="bg-[url('../public/1.jpeg')] bg-cover bg-center w-1/3"></div>
      <div className="bg-[url('../public/2.jpeg')] bg-cover bg-center w-1/3"></div>
      <div className="bg-[url('../public/3.jpeg')] bg-cover bg-center w-1/3"></div>

      <form 
        onSubmit={(e) => e.preventDefault()} 
        className="absolute inset-0 flex flex-col justify-center p-8 bg-white bg-opacity-70 rounded-tl-lg"
      >
        <div className="flex items-center mb-4">
          <p className="mr-4">Name:</p>
          <input
            type="text"
            value={attributes.name}
            onChange={handleChange("name")}
            disabled={!isEditMode}
            style={inputStyle}
            className="flex-1"
          />
        </div>
        <div className="flex items-center mb-4">
          <p className="mr-4">Height:</p>
          <input
            type="text"
            value={attributes.height}
            onChange={handleChange("height")}
            disabled={!isEditMode}
            style={inputStyle}
            className="flex-1"
          />
        </div>
        <div className="flex items-center mb-4">
          <p className="mr-4">Mass:</p>
          <input
            type="text"
            value={attributes.mass}
            onChange={handleChange("mass")}
            disabled={!isEditMode}
            style={inputStyle}
            className="flex-1"
          />
        </div>
        <div className="flex items-center mb-4">
          <p className="mr-4">Hair Color:</p>
          <input
            type="text"
            value={attributes.hair_color}
            onChange={handleChange("hair_color")}
            disabled={!isEditMode}
            style={inputStyle}
            className="flex-1"
          />
        </div>
        <div className="flex items-center mb-4">
          <p className="mr-4">Skin Color:</p>
          <input
            type="text"
            value={attributes.skin_color}
            onChange={handleChange("skin_color")}
            disabled={!isEditMode}
            style={inputStyle}
            className="flex-1"
          />
        </div>
        <div className="flex items-center mb-4">
          <p className="mr-4">Eye Color:</p>
          <input
            type="text"
            value={attributes.eye_color}
            onChange={handleChange("eye_color")}
            disabled={!isEditMode}
            style={inputStyle}
            className="flex-1"
          />
        </div>
        <div className="flex items-center mb-4">
          <p className="mr-4">Birth Year:</p>
          <input
            type="text"
            value={attributes.birth_year}
            onChange={handleChange("birth_year")}
            disabled={!isEditMode}
            style={inputStyle}
            className="flex-1"
          />
        </div>
        <div className="flex items-center mb-4">
          <p className="mr-4">Gender:</p>
          <input
            type="text"
            value={attributes.gender}
            onChange={handleChange("gender")}
            disabled={!isEditMode}
            style={inputStyle}
            className="flex-1"
          />
        </div>
        <button type="button" onClick={handleEditClick}>
          {isEditMode ? "Save" : "Edit"}
        </button>
      </form>
    </div>
  );
};

export default Characters;
