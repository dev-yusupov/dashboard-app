import React from 'react';
import Card from '../../components/Card/Card';

const Testing: React.FC = () => {
    return (
        <>
            <h1>Hello</h1>
        </>
    );
};

const Dashboard: React.FC = () => {
    return (
        <>
            <Card
                title="Total Revenue"
                description="Sales Summary"
                content={<Testing />}
            />
        </>
    );
};

export default Dashboard;
