import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    LabelList,
    Cell,
    Tooltip,
    Legend,
} from 'recharts';
import styles from './TopProducts.module.css';

const data = [
    {
        id: '01',
        name: 'Home Decor Range',
        popularity: 75, // Out of 100
        sales: 45, // Percentage
        color: '#42a5f5', // Blue
    },
    {
        id: '02',
        name: 'Disney Princess Pink Bag 18"',
        popularity: 60,
        sales: 29,
        color: '#66bb6a', // Green
    },
    {
        id: '03',
        name: 'Bathroom Essentials',
        popularity: 70,
        sales: 18,
        color: '#8e44ad', // Purple
    },
    {
        id: '04',
        name: 'Apple Smartwatches',
        popularity: 40,
        sales: 25,
        color: '#f39c12', // Orange
    },
];

const TopProductsChart: React.FC = () => {
    return (
        <div className={styles.topProductsContainer}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    aria-label="Top Products Chart"
                    role="img"
                    data={data}
                    layout="vertical"
                >
                    <XAxis type="number" hide domain={[0, 100]} axisLine={false} />
                    <YAxis
                        dataKey="name"
                        type="category"
                        fontSize={14}
                        tickLine={false}
                        width={160}
                    />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="popularity"
                        barSize={10}
                        radius={10}
                        animationDuration={1000}
                    >
                        {data.map((entry) => (
                            <Cell key={`cell-${entry.id}`} fill={entry.color} />
                        ))}
                        <LabelList
                            dataKey="popularity"
                            position="right"
                            formatter={(value: number) => `${value}%`}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TopProductsChart;
