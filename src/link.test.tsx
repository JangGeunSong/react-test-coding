import React from 'react'
import Link from './link'
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
    const component = renderer.create(<Link page="http://www.facebook.com">facebook</Link>);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    if(tree !== null) {
        tree.props.onMouseEnter();
    }

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    if(tree !== null) {
        tree.props.onMouseLeave()
    }

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})