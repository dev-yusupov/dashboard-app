import React from 'react';
import logo from '../../../../assets/images/logo.png';
import styles from './Brand.module.css';

const Brand: React.FC = () => (
    <div className={styles.brand}>
        <img src={logo} />
        <h2 className={styles.brandHeader}>Dabang</h2>
    </div>
);

export default Brand;
