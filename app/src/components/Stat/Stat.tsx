import React, { ReactNode } from 'react';
import styles from './Stat.module.css';

interface StatProps {
    icon: ReactNode;
    iconBackground: string;
    backgroundColor: string;
    amount: string;
    label: string;
    subLabel: string;
}

const Stat: React.FC<StatProps> = ({
    icon,
    iconBackground,
    backgroundColor,
    amount,
    label,
    subLabel,
}) => {
    return (
        <div
            className={styles.statContainer}
            style={{ backgroundColor: backgroundColor }}
        >
            <span style={{ background: iconBackground }} className={styles.statIcon}>
                {icon}
            </span>
            <h3>{amount}</h3>
            <div>
                <h5>{label}</h5>
                <p style={{ color: '#4079ED' }}>{subLabel}</p>
            </div>
        </div>
    );
};

export default Stat;
