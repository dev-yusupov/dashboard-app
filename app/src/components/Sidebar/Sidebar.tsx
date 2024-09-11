// Sidebar.tsx
import React from 'react';
import { mainRoutes } from '../../routes/main-routes';
import Brand from './components/Brand/Brand';
import Link from './components/Link/Link';

import styles from './Sidebar.module.css';
import Content from './components/Content/Content';

const Sidebar: React.FC = () => {
    return (
        <div className={styles.sidebar} data-testid="sidebar">
            <Brand />
            {mainRoutes.map((route) => (
                <Link
                    key={route.path}
                    to={route.path}
                    icon={route.icon}
                    name={route.name}
                />
            ))}
            <Content />
        </div>
    );
};

export default Sidebar;
