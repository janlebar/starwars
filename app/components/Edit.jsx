// "use client";
// import React, { useState } from 'react';



// const Characters = ({ initialAttributes, onChange }) => {
//   const [attributes, setAttributes] = useState(initialAttributes);
//   //const [name, setName] = useState(initialAttributes.name);
//   //const [height, setHeight] = useState(initialAttributes.height);


//   const handleChange = (attributeName) => (event) => {
//     setAttributes(oldValue => {
//       oldValue[attributeName] = event.target.value;
//       return {...oldValue};
//     });
//   };



//   // const handleChange = (attributeName) => (event) => {
//   //   setAttributes(oldValue => ({
//   //     ...oldValue, // Spread the existing attributes
//   //     [attributeName]: event.target.value // Update the specific attribute with the new value
//   //   }));
//   // };



//   const handleSubmit = (event) => {
//     event.preventDefault();

//     onChange(attributes);

    

//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={attributes.name} onChange={handleChange("name")} />
//         <input type="text" value={attributes.height} onChange={handleChange("height")} />
//         <button type="submit">Edit</button>
//       </form>
//       <div>
//         <h2>Attributes</h2>
//         <p>Name: {attributes.name}</p>
//         <p>Height: {attributes.height}</p>
//         <p>Mass: {attributes.mass}</p>
//         <p>Hair Color: {attributes.hair_color}</p>
//         <p>Skin Color: {attributes.skin_color}</p>
//         <p>Eye Color: {attributes.eye_color}</p>
//         <p>Birth Year: {attributes.birth_year}</p>
//         <p>Gender: {attributes.gender}</p>
//       </div>
//     </div>
//   );
// };

// export default Characters;


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
        <input
          type="text"
          value={attributes.name}
          onChange={handleChange("name")}
          disabled={!isEditMode}
        />
        <input
          type="text"
          value={attributes.height}
          onChange={handleChange("height")}
          disabled={!isEditMode}
        />
        <button type="button" onClick={handleEditClick}>
          {isEditMode ? "Save" : "Edit"}
        </button>
      </form>
      <div>
        <h2>Attributes</h2>
        <p>Name: {attributes.name}</p>
        <p>Height: {attributes.height}</p>
        <p>Mass: {attributes.mass}</p>
        <p>Hair Color: {attributes.hair_color}</p>
        <p>Skin Color: {attributes.skin_color}</p>
        <p>Eye Color: {attributes.eye_color}</p>
        <p>Birth Year: {attributes.birth_year}</p>
        <p>Gender: {attributes.gender}</p>
      </div>
    </div>
  );
};

export default Characters;
