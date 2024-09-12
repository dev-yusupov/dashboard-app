import React from 'react';
import styles from './TotalRevenue.module.css';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    BarChart,
    Bar,
} from 'recharts';

const data = [
    { name: 'Mon', uv: 4000, pv: 2400 },
    { name: 'Tue', uv: 3000, pv: 1398 },
    { name: 'Wed', uv: 2000, pv: 9800 },
    { name: 'Thu', uv: 2780, pv: 3908 },
    { name: 'Fri', uv: 1890, pv: 4800 },
    { name: 'Sat', uv: 2390, pv: 3800 },
    { name: 'Sun', uv: 3490, pv: 4300 },
];

const TotalRevenue: React.FC = () => {
    return (
        <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis
                        dataKey="name"
                        tickLine={false}
                        axisLine={{ stroke: '#f5f5f5' }}
                    />
                    <YAxis
                        tickLine={false}
                        axisLine={{ stroke: '#f5f5f5' }}
                        tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                        domain={[0, 25000]}
                        ticks={[0, 5000, 10000, 15000, 20000, 25000]} // Set ticks for 5k intervals
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#263238',
                            border: 'none',
                            borderRadius: '5px',
                            padding: '10px',
                        }}
                        itemStyle={{ color: '#fff' }}
                        labelStyle={{ color: '#90A4AE' }}
                        cursor={{ fill: 'rgba(38, 50, 56, 0.1)' }}
                        formatter={(value: number) => `${(value / 1000).toFixed(1)}k`} // Format tooltip values as well
                    />
                    <Legend
                        verticalAlign="top"
                        height={36}
                        iconType="circle"
                        wrapperStyle={{ paddingTop: 10 }}
                    />
                    <Bar
                        dataKey="pv"
                        name="Revenue"
                        fill="#0095FF"
                        radius={5}
                        animationDuration={1000}
                    />
                    <Bar
                        dataKey="uv"
                        name="Visits"
                        fill="#00E096"
                        radius={5}
                        animationDuration={1000}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TotalRevenue;
