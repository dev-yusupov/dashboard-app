import React from 'react';
import logo from '../../../../assets/images/logo.png';
import styles from './Brand.module.css';

const Brand: React.FC = () => (
    <div className={styles.brand} data-testid="brand-component">
        <img src={logo} />
        <h2 className={styles.brandHeader}>Dabang</h2>
    </div>
);

export default Brand;
