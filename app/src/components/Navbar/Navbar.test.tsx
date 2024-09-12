import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

jest.mock('../../routes/main-routes', () => ({
    mainRoutes: [
        { path: '/dashboard', name: 'Dashboard' },
        { path: '/settings', name: 'Settings' },
    ],
}));

describe('Navbar component unit tests', () => {
    it('renders correct title for existing route', () => {
        render(
            <MemoryRouter initialEntries={['/dashboard']}>
                <Navbar />
            </MemoryRouter>
        );

        const titleElement = screen.getByRole('heading', { name: /Dashboard/i });
        expect(titleElement).toBeInTheDocument();
    });
    it('renders "Not Found" title for non-existent route', () => {
        render(
            <MemoryRouter initialEntries={['/unknown']}>
                <Navbar />
            </MemoryRouter>
        );

        const titleElement = screen.getByText('Not Found');
        expect(titleElement).toBeInTheDocument();
    });
    it('renders search input', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        const searchInput = screen.getByPlaceholderText('Search here');
        expect(searchInput).toBeInTheDocument();
    });
    it('renders language component', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        const languageElement = screen.getByTestId('language-en');
        expect(languageElement).toBeInTheDocument();
    });
});
