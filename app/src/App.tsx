// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import NotFound from './pages/NotFound/NotFound';
import DashboardLayout from './layouts/Dashboard';

const App: React.FC = () => {
    return (
        <HelmetProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<DashboardLayout />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </HelmetProvider>
    );
};

export default App;
