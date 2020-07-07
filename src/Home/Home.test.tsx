import React from 'react';
import { render } from '@testing-library/react';
import App from './Home';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Winston/i);
  expect(linkElement).toBeInTheDocument();
});
