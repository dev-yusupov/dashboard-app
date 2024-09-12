import React from 'react';
import styles from './Dashboard.module.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import { mainRoutes } from '../routes/main-routes';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface RouteWithHelmetProps {
    name?: string;
    component: React.FC;
}

const RouteWithHelmet: React.FC<RouteWithHelmetProps> = ({
    name,
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

const DashboardLayout: React.FC = () => {
    return (
        <div className={styles.dashboardLayout}>
            <Sidebar />
            <div className={styles.dashboardContent}>
                <Navbar />
                <div className={styles.mainContent}>
                    <Routes>
                        {mainRoutes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path.replace(/^\/d/, '')} // Remove '/d' prefix
                                element={
                                    <RouteWithHelmet
                                        name={route.name}
                                        component={route.component}
                                    />
                                }
                            />
                        ))}
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
