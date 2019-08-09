import React from 'react';
import App from '../App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';


describe('interaction within <App />', () => {
  let { getByText, isSubmitting } = render(<App />),
    submit = getByText('Submit')

  it('should submit the form when clicked', () => {
    fireEvent.click(submit)

    // expect(strikesTest).toEqual((strikes + 1).toString())
  })
  expect(isSubmitting).toEqual(undefined);
})