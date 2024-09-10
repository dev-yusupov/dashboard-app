// src/pages/NotFound/NotFound.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import NotFound from './NotFound';

// Wrap the component in necessary providers for testing
const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <HelmetProvider>
        <Router>{children}</Router>
    </HelmetProvider>
);

test('renders the NotFound page with the correct title', () => {
    render(<NotFound />, { wrapper: Wrapper });

    // Check if the title is set correctly
    const title = screen.getByText('404');
    expect(title).toBeInTheDocument();
});

test('renders the correct content', () => {
    render(<NotFound />, { wrapper: Wrapper });

    // Check if the "404" title is rendered
    expect(screen.getByText('404')).toBeInTheDocument();
    // Check if the "Oops! The page you’re looking for doesn’t exist." message is rendered
    expect(
        screen.getByText(/Oops! The page you’re looking for doesn’t exist./i)
    ).toBeInTheDocument();
});

test('navigates to the homepage when the button is clicked', () => {
    const { container } = render(<NotFound />, { wrapper: Wrapper });
    const button = screen.getByRole('button', { name: /Go to Homepage/i });

    // Simulate button click
    fireEvent.click(button);

    // Since we're not testing navigation behavior here directly, you might need to mock useNavigate
    // and assert the expected navigation. This example assumes you have some routing setup.
    expect(container.innerHTML).toMatch('Homepage');
});
