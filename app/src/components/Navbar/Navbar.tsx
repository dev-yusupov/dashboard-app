import React from 'react';
import styles from './Navbar.module.css';
import { useLocation } from 'react-router-dom';
import { mainRoutes } from '../../routes/main-routes';
import InputField from '../InputField/InputField';
import Language from '../Language/Language';
import Notification from '../Notification/Notification';
import Profile from '../Profile/Profile';

const Navbar: React.FC = () => {
    const location = useLocation();

    const currentRoute = mainRoutes.find((route) => route.path == location.pathname);

    return (
        <nav className={styles.navbar}>
            <h1>{currentRoute ? currentRoute.name : 'Not Found'}</h1>
            <div className={styles.navbarControls}>
                <InputField placeholder="Search here" width="340px" />
                <Language />
                <Notification />
                <Profile name="Musfiq" role="Admin" />
            </div>
        </nav>
    );
};

export default Navbar;
