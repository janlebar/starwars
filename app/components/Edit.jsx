
"use client";
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

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
      <p>Name:</p>
        <input
          type="text"
          value={attributes.name}
          onChange={handleChange("name")}
          disabled={!isEditMode}
        />
      <p>Height:</p>
        <input
          type="text"
          value={attributes.height}
          onChange={handleChange("height")}
          disabled={!isEditMode}
        />
      <p>Mass:</p>
        <input
          type="text"
          value={attributes.mass}
          onChange={handleChange("mass")}
          disabled={!isEditMode}
        />
      <p>Hair Color:</p>
        <input
          type="text"
          value={attributes.hair_color}
          onChange={handleChange("hair_color")}
          disabled={!isEditMode}
        />
      <p>Skin Color:</p>
        <input
          type="text"
          value={attributes.skin_color}
          onChange={handleChange("skin_color")}
          disabled={!isEditMode}
        />
      <p>Eye Color:</p>
        <input
          type="text"
          value={attributes.eye_color}
          onChange={handleChange("eye_color")}
          disabled={!isEditMode}
        />
      <p>Birth Year:</p>
        <input
          type="text"
          value={attributes.birth_year}
          onChange={handleChange("birth_year")}
          disabled={!isEditMode}
        />
      <p>Gender</p>
        <input
          type="text"
          value={attributes.gender}
          onChange={handleChange("gender")}
          disabled={!isEditMode}
        />
        <button type="button" onClick={handleEditClick}>
          {isEditMode ? "Save" : "Edit"}
        </button>
      </form>
    </div>
  );
};

export default Characters;
