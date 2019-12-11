import React from 'react'
import Checkbox from './checkbox'
import { cleanup, fireEvent, render } from '@testing-library/react'

afterEach(cleanup)

it('checkbox changes the text after click', () => {
    const { queryByLabelText, getByLabelText } = render(
        <Checkbox labelOn='On' labelOff='Off' />
    )

    expect(queryByLabelText(/off/i)).toBeTruthy();

    fireEvent.click(getByLabelText(/off/i));

    expect(queryByLabelText(/on/i)).toBeTruthy();
}) 