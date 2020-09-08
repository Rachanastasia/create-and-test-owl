import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage';
import renderer from 'react-test-renderer';



describe('Stage', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Stage />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () =>{
        const tree= renderer
        .create(<Stage name="Rachel" avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1"/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });

    
})