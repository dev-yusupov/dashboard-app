import React from 'react';
import whiteLogo from '../../../../assets/images/logo-white.png';
import styles from './Content.module.css';
import Button from '../../../Button/Button';

const Content: React.FC = () => {
    return (
        <div className={styles.content} data-testid="content-component">
            <img src={whiteLogo} alt="Logo" data-testid="content-logo" />
            <h3 data-testid="content-heading">Dabang Pro</h3>
            <p className={styles.paragraph} data-testid="content-paragraph">
                Get access to all features on tetumbas
            </p>
            <Button label="Get Pro" variant="white" data-testid="content-button" />
        </div>
    );
};

export default Content;
