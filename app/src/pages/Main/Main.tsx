import React from 'react';
import Card from '../../components/Card/Card';
import TodaySale from '../../components/TodaySale/TodaySale';

const Main: React.FC = () => {
    return (
        <>
            <div>
                <Card
                    title="Today’s Sales"
                    description="Sales Summery"
                    content={<TodaySale />}
                />
            </div>
        </>
    );
};

export default Main;
