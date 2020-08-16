import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../App';

it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(1).toBe(1);
});
