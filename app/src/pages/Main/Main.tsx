import React from 'react';
import Card from '../../components/Card/Card';
import TodaySale from '../../components/TodaySale/TodaySale';
import VisitorInsights from '../../components/Visitor/Visitor';

import styles from './Main.module.css';

const Main: React.FC = () => {
    return (
        <>
            <div className={styles.topInsights}>
                <Card
                    title="Today’s Sales"
                    description="Sales Summary"
                    content={<TodaySale />}
                />
                <Card title="Visitor Insights" content={<VisitorInsights />} />
            </div>
        </>
    );
};

export default Main;
