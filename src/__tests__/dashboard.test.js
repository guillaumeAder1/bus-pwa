import React from 'react';
import Dashboard from '../components/dashboard/index';
import renderer from 'react-test-renderer';

test('dashboard component', () => {
    const component = renderer.create(
        <Dashboard />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot(); #

    // // manually trigger the callback
    // tree.props.onMouseEnter();
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();

    // // manually trigger the callback
    // tree.props.onMouseLeave();
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
});