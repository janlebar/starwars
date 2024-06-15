"use client";

import React from 'react';

import Characters from './components/Edit';




const MainPage = () => {

    const initialAttributes = {
        id: '1',
        name: 'Yoda',
        height: '66',
        mass: '13',
        hair_color: 'White',
        skin_color: 'Green',
        eye_color: 'Green-gold',
        birth_year: '896BBY',
        gender: 'Male',
      };



    return (
        <div><Characters initialAttributes={initialAttributes} onChange={(attributes) => console.log(attributes)}/></div>
    );
}

export default MainPage;
