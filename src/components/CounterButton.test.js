import {shallow,mount,render} from 'enzyme';
import CounterButton from './CounterButton';
import React from 'react';

// console.log(shallow(<Card/>));

// it('expects to render Card Component', ()=>{
//     expect(shallow(<Card/>).length).toEqual(1);
// })


it('expects to render Counter Button', ()=>{
    const mockColor= 'red'
    expect(shallow(<CounterButton robots={mockColor}/>)).toMatchSnapshot();
})


it('correctly increments the counter', ()=>{
    const mockColor= 'red'
    const wrapper = shallow(<CounterButton color={mockColor}/>);
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count:2});
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count:3});
    wrapper.find('[id="counter"]').simulate('keypress');
    expect(wrapper.state()).toEqual({count:3});
    expect(wrapper.props().color).toEqual('red');
})