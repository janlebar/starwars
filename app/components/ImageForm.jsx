
import React, { useState } from 'react';
import Script from 'next/script';


// Komponenta sprejema tri propse
const ImageForm = ({ initialAttributes, onChange, imageUrl }) => {

    const [attributes, setAttributes] = useState(initialAttributes);
    const [isEditMode, setIsEditMode] = useState(false);

    const handleChange = (attributeName) => (event) => {
        // Stanje atributov z novo vrednostjo
        setAttributes(oldValue => ({
            ...oldValue,
            [attributeName]: event.target.value
        }));
    };
    
    // Funkcija za urejanje
    const handleEditClick = () => {
        if (isEditMode) {
            // Če je v načinu urejanja kliče onChange s trenutnimi vrednostmi
            onChange(attributes); 
        }
        // Edit 
        setIsEditMode(!isEditMode);
    };

    // Stili
    const inputStyle = {
        backgroundColor: 'transparent',
        border: isEditMode ? '1px solid black' : 'none',
        color: 'white',
    };

    return (
        <>
            {/*  Google Fonts ya Droid Sansa */}
            <Script
                strategy="beforeInteractive"
                src="https://fonts.googleapis.com/css2?family=Droid+Sans:wght@700&display=swap"
            />
            <div 
                className="relative flex gap-6" 
                style={{ 
                    backgroundImage: `url(${imageUrl})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    minHeight: '120vh', 
                    overflow: 'hidden',
                    borderRadius: '10px', 
                }}
            >
                {/* Kontejner za formo, poravnan na dno */}
                <div className="w-full flex items-end"> 
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="w-full relative bg-white bg-opacity-0 rounded-lg p-8"
                    >
                       
                        <div className="flex items-center mb-4">
                            <p className="mr-4 text-white">Name:</p>
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
                            <p className="mr-4 text-white">Height:</p>
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
                            <p className="mr-4 text-white">Mass:</p>
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
                            <p className="mr-4 text-white">Hair Color:</p>
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
                            <p className="mr-4 text-white">Skin Color:</p>
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
                            <p className="mr-4 text-white">Eye Color:</p>
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
                            <p className="mr-4 text-white">Birth Year:</p>
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
                            <p className="mr-4 text-white">Gender:</p>
                            <input
                                type="text"
                                value={attributes.gender}
                                onChange={handleChange("gender")}
                                disabled={!isEditMode}
                                style={inputStyle}
                                className="flex-1"
                            />
                        </div>
          
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button
                                type="button"
                                onClick={handleEditClick}
                                className="mt-4 pl-7 pr-7 pt-2 pb-2 bg-yellow-400 text-black rounded font-droid-sans text-24px font-bold leading-28px text-left"
                                style={{ backgroundColor: '#E3D61D' }}
                            >
                                {isEditMode ? 'Save' : 'Edit'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};


export default ImageForm;

