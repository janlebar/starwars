import React, { useState } from 'react';
import Script from 'next/script';

const ImageForm = ({ initialAttributes, onChange, imageUrl }) => {
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
        backgroundColor: 'transparent',
        border: isEditMode ? '1px solid black' : 'none',
    };

    return (
        <>
            <Script
                strategy="beforeInteractive"
                src="https://fonts.googleapis.com/css2?family=Droid+Sans:wght@700&display=swap"
            />
            <div className="relative flex gap-6 h-[614.24px]">
                <div className="w-1/3 relative rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center h-full" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                </div>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="w-2/3 relative bg-white bg-opacity-0 rounded-lg p-8"
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
                    <button
                        type="button"
                        onClick={handleEditClick}
                        className="mt-4 pl-7 pr-7 pt-2 pb-2 bg-yellow-400 text-black rounded font-droid-sans text-24px font-bold leading-28px text-left"
                        style={{ backgroundColor: '#E3D61D' }}
                    >
                        {isEditMode ? 'Save' : 'Edit'}
                    </button>
                </form>
            </div>
        </>
    );
};

export default ImageForm;

