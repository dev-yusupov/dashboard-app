import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Link.module.css';

interface LinkProps {
    to: string;
    name: string;
    icon: ReactNode;
}

const Link: React.FC<LinkProps> = ({ to, name, icon }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.activeLink : ''}`
            }
        >
            <span className={styles.icon}>{icon}</span>
            <span>{name}</span>
        </NavLink>
    );
};

export default Link;
