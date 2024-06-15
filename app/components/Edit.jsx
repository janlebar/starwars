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

  const inputStyle = {
    backgroundColor: isEditMode ? 'white' : 'transparent',
    border: isEditMode ? '1px solid black' : 'none',
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ margin: '0 10px 0 0' }}>Name:</p>
          <input
            type="text"
            value={attributes.name}
            onChange={handleChange("name")}
            disabled={!isEditMode}
            style={inputStyle}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ margin: '0 10px 0 0' }}>Height:</p>
          <input
            type="text"
            value={attributes.height}
            onChange={handleChange("height")}
            disabled={!isEditMode}
            style={inputStyle}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ margin: '0 10px 0 0' }}>Mass:</p>
          <input
            type="text"
            value={attributes.mass}
            onChange={handleChange("mass")}
            disabled={!isEditMode}
            style={inputStyle}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ margin: '0 10px 0 0' }}>Hair Color:</p>
          <input
            type="text"
            value={attributes.hair_color}
            onChange={handleChange("hair_color")}
            disabled={!isEditMode}
            style={inputStyle}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ margin: '0 10px 0 0' }}>Skin Color:</p>
          <input
            type="text"
            value={attributes.skin_color}
            onChange={handleChange("skin_color")}
            disabled={!isEditMode}
            style={inputStyle}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ margin: '0 10px 0 0' }}>Eye Color:</p>
          <input
            type="text"
            value={attributes.eye_color}
            onChange={handleChange("eye_color")}
            disabled={!isEditMode}
            style={inputStyle}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ margin: '0 10px 0 0' }}>Birth Year:</p>
          <input
            type="text"
            value={attributes.birth_year}
            onChange={handleChange("birth_year")}
            disabled={!isEditMode}
            style={inputStyle}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ margin: '0 10px 0 0' }}>Gender:</p>
          <input
            type="text"
            value={attributes.gender}
            onChange={handleChange("gender")}
            disabled={!isEditMode}
            style={inputStyle}
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
