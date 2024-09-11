import React from 'react';
import { render, screen } from '@testing-library/react';
import Content from './Content';
// import '@testing-library/jest-dom/extend-expect';

describe('Content component', () => {
    it('renders the logo image', () => {
        render(<Content />);
        const logoImage = screen.getByRole('img');
        expect(logoImage).toBeInTheDocument();
        expect(logoImage).toHaveAttribute(
            'src',
            expect.stringContaining('logo-white.png')
        );
    });

    it('renders the correct heading', () => {
        render(<Content />);
        const heading = screen.getByRole('heading', { level: 3 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Dabang Pro');
    });

    it('renders the correct paragraph', () => {
        render(<Content />);
        const paragraph = screen.getByText('Get access to all features on tetumbas');
        expect(paragraph).toBeInTheDocument();
    });

    it('renders the button with correct label', () => {
        render(<Content />);
        const button = screen.getByRole('button', { name: /Get Pro/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Get Pro');
    });
});
