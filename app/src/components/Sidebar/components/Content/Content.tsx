import React from 'react';
import whiteLogo from '../../../../assets/images/logo-white.png';
import styles from './Content.module.css';
import Button from '../../../Button/Button';

const Content: React.FC = () => {
    return (
        <div className={styles.content}>
            <img src={whiteLogo} />
            <h3>Dabang Pro</h3>
            <p className={styles.paragraph}>Get access to all features on tetumbas</p>
            <Button label="Get Pro" variant="white" />
        </div>
    );
};

export default Content;
