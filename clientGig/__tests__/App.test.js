import React from 'react'
import {render, fireEvent, cleanup, waitFor} from '@testing-library/react'

// this adds custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
import App from '../Components/App';

afterEach(cleanup);


it('CheckboxWithLabel changes the text after click', async () => {
    const { getByText } = render(<App/>,);

    const dolphin = await waitFor(() => getByText(/dolphin/i),)

    expect(dolphin).toBeTruthy();
});