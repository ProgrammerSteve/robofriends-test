import {shallow,mount,render} from 'enzyme';
import CardList from './CardList.js';
import React from 'react';

// console.log(shallow(<Card/>));

// it('expects to render Card Component', ()=>{
//     expect(shallow(<Card/>).length).toEqual(1);
// })


it('expects to render Card Component', ()=>{
    const mockRobots=[
        {
            id:1,
            name: 'John Snow',
            username: 'JohnJohn',
            email: 'john@gmail.com',
        }
    ]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})