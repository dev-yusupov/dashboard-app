// Sidebar.test.tsx
import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom'; // Import MemoryRouter and Routes for routing simulation
import Sidebar from './Sidebar';
import { mainRoutes } from '../../routes/main-routes';

describe('Sidebar Component', () => {
    it('should render the Sidebar component', () => {
        render(
            <MemoryRouter>
                <Sidebar />
            </MemoryRouter>
        );
        const sidebarElement = screen.getByTestId('sidebar');
        expect(sidebarElement).toBeInTheDocument();
    });

    it('should render the Brand component', () => {
        render(
            <MemoryRouter>
                <Sidebar />
            </MemoryRouter>
        );
        const brandElement = screen.getByTestId('brand-component');
        expect(brandElement).toBeInTheDocument();
    });

    it('should render all links from the mainRoutes', () => {
        render(
            <MemoryRouter>
                <Sidebar />
            </MemoryRouter>
        );
        mainRoutes.forEach((route) => {
            const linkElement = screen.getByTestId(`link-${route.name}`);
            expect(linkElement).toBeInTheDocument();
        });
    });

    it('should render icons for each link', () => {
        render(
            <MemoryRouter>
                <Sidebar />
            </MemoryRouter>
        );
        mainRoutes.forEach((route) => {
            const iconElement = screen.getByTestId(`icon-${route.name}`);
            expect(iconElement).toBeInTheDocument();
        });
    });

    it('should render the Content component', () => {
        render(
            <MemoryRouter>
                <Sidebar />
            </MemoryRouter>
        );
        const contentElement = screen.getByTestId('content-component');
        expect(contentElement).toBeInTheDocument();
    });

    it('should correctly apply the active class to the active link', () => {
        render(
            <MemoryRouter initialEntries={['/d/main']}>
                <Sidebar />
                <Routes>
                    {mainRoutes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<div>{route.name}</div>}
                        />
                    ))}
                </Routes>
            </MemoryRouter>
        );
        const activeLink = screen.getByTestId(`link-Dashboard`);
        expect(activeLink).toHaveClass('activeLink');
    });

    it('should navigate to the correct route when a link is clicked', () => {
        render(
            <MemoryRouter initialEntries={['/d/main']}>
                <Sidebar />
                <Routes>
                    {mainRoutes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<div>{route.name} Page</div>}
                        />
                    ))}
                </Routes>
            </MemoryRouter>
        );

        const orderLink = screen.getByTestId(`link-Order`);

        act(() => {
            orderLink.click();
        });

        const orderPageText = screen.getByText('Order');
        expect(orderPageText).toBeInTheDocument();
    });
});
