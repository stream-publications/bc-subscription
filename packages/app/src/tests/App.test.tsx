import {render, screen} from '@testing-library/react';
import React from 'react';
import App from '../App';

it('renders without crashing', () => {
  render(<App />);
  expect(screen.getByText('Learn React Now')).toBeInTheDocument();
  expect(1).toBe(1);
});
