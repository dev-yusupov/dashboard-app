// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { mainRoutes } from './routes/main-routes';
import NotFound from './pages/NotFound/NotFound';

interface RouteWithHelmetProps {
    name?: string;
    component: React.FC;
}

const RouteWithHelmet: React.FC<RouteWithHelmetProps> = ({
    // eslint-disable-next-line react/prop-types
    name,
    // eslint-disable-next-line react/prop-types
    component: Component,
}) => {
    return (
        <>
            <Helmet>
                <title>{name ? `${name} - Dabang` : 'Dabang'}</title>
            </Helmet>
            <Component />
        </>
    );
};

const App: React.FC = () => {
    return (
        <HelmetProvider>
            <Router>
                <Routes>
                    {mainRoutes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <RouteWithHelmet
                                    name={route.name}
                                    component={route.component}
                                />
                            }
                        />
                    ))}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </HelmetProvider>
    );
};

export default App;
