import {shallow,mount,render} from 'enzyme';
import Card from './Card.js';
import React from 'react';

// console.log(shallow(<Card/>));

// it('expects to render Card Component', ()=>{
//     expect(shallow(<Card/>).length).toEqual(1);
// })


it('expects to render Card Component', ()=>{
    expect(shallow(<Card/>)).toMatchSnapshot();
})