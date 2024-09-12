import React from 'react';
import styles from './ChartsGrid.module.css';
import TotalRevenue from './components/TotalRevenue/TotalRevenue';
import Card from '../Card/Card';
import CustomerSatisfactionChart from './components/CustomerSatisfaction/CustomerSatisfaction';

const ChartsGrid: React.FC = () => {
    return (
        <div className={styles.chartsGrid}>
            <div className={styles.chartsGridItem}>
                <Card title="Total Revenue" content={<TotalRevenue />} />
                <Card
                    title="Customer Satisfaction"
                    content={<CustomerSatisfactionChart />}
                />
            </div>
        </div>
    );
};

export default ChartsGrid;
