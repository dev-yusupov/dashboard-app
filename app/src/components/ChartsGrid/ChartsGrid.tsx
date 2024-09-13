// ChartsGrid.js
import React from 'react';
import styles from './ChartsGrid.module.css';
import TotalRevenue from './components/TotalRevenue/TotalRevenue';
import Card from '../Card/Card';
import CustomerSatisfactionChart from './components/CustomerSatisfaction/CustomerSatisfaction';
import TopProducts from './components/TopProducts/TopProducts';
import SalesMap from './components/SalesMap/SalesMap';

const ChartsGrid: React.FC = () => {
    return (
        <div className={styles.chartsGrid}>
            <div className={styles.chartsGridItem}>
                <Card title="Total Revenue" content={<TotalRevenue />} />
            </div>
            <div className={styles.chartsGridItem}>
                <Card title="Top Products" content={<TopProducts />} />
            </div>
            <div className={styles.chartsGridItem}>
                <Card
                    title="Customer Satisfaction"
                    content={<CustomerSatisfactionChart />}
                />
            </div>
            <div className={styles.chartsGridItem}>
                <Card title="Sales Map" content={<SalesMap />} />
            </div>
        </div>
    );
};

export default ChartsGrid;
