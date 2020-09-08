import React from 'react';
import ReactDOM from 'react-dom';
import Participant from './Participants';
import renderer from 'react-test-renderer';


describe('Participant', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Participant />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () =>{
        const tree= renderer
        .create(<Participant avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1"/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });

    
})