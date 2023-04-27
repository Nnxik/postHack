import React from 'react';
import { render, screen } from '@testing-library/react';
import Base from './components/Base';

test('renders login form', () => {
  render(<Base />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
