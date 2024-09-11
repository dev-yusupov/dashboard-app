// Link.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Link from './Link';

// Mock data
const mockIcon = <span data-testid="mock-icon">Icon</span>;

describe('Link component', () => {
    it('should render with provided props', () => {
        render(
            <MemoryRouter>
                <Link to="/test" name="Test Link" icon={mockIcon} />
            </MemoryRouter>
        );

        // Check if the link text is rendered
        expect(screen.getByText('Test Link')).toBeInTheDocument();

        // Check if the icon is rendered
        expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
    });

    it('should have active styling when link is active', () => {
        render(
            <MemoryRouter initialEntries={['/test']}>
                <Routes>
                    <Route
                        path="/test"
                        element={<Link to="/test" name="Test Link" icon={mockIcon} />}
                    />
                </Routes>
            </MemoryRouter>
        );

        // Check if the link has the 'activeLink' class
        const linkElement = screen.getByTestId('link-Test Link');
        expect(linkElement).toHaveClass('activeLink');
    });

    it('should not have active styling when link is not active', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route
                        path="/"
                        element={<Link to="/test" name="Test Link" icon={mockIcon} />}
                    />
                </Routes>
            </MemoryRouter>
        );

        // Check if the link does not have the 'activeLink' class
        const linkElement = screen.getByTestId('link-Test Link');
        expect(linkElement).not.toHaveClass('activeLink');
    });
});
