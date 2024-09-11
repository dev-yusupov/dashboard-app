import React from 'react';
import { render, screen } from '@testing-library/react';
import Brand from './Brand';

describe('Brand component unit tests', () => {
    it('renders correct label', () => {
        render(<Brand />);

        const labelElement = screen.getByText('Dabang');
        expect(labelElement).toBeInTheDocument();
    });
    it('renders correct logo image', () => {
        render(<Brand />);

        const imageElement = screen.getByRole('img');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', 'logo.png');
    });
});
