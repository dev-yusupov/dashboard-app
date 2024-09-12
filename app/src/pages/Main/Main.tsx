import React from 'react';
import Card from '../../components/Card/Card';
import TodaySale from '../../components/TodaySale/TodaySale';
import VisitorInsights from '../../components/Visitor/Visitor';

import styles from './Main.module.css';
import ChartsGrid from '../../components/ChartsGrid/ChartsGrid';

const Main: React.FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.topInsights}>
                <Card
                    title="Today’s Sales"
                    description="Sales Summary"
                    content={<TodaySale />}
                />
                <Card title="Visitor Insights" content={<VisitorInsights />} />
            </div>
            <ChartsGrid />
        </div>
    );
};

export default Main;
