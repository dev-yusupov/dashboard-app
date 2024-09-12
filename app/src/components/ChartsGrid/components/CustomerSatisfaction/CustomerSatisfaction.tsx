import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import './CustomerSatisfaction.css'; // Import CSS file

const data = [
    { name: 'Week 1', lastMonth: 3200, thisMonth: 3800 },
    { name: 'Week 2', lastMonth: 3000, thisMonth: 3500 },
    { name: 'Week 3', lastMonth: 2800, thisMonth: 4000 },
    { name: 'Week 4', lastMonth: 2900, thisMonth: 4200 },
    { name: 'Week 5', lastMonth: 3100, thisMonth: 4500 },
    { name: 'Week 6', lastMonth: 3200, thisMonth: 4800 },
    { name: 'Week 7', lastMonth: 3500, thisMonth: 5200 },
];

interface CustomTooltipProps {
    active?: boolean;
    payload?: any[];
    label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="tooltip-label">{label}</p>
                {payload.map((item, index) => (
                    <p key={index} className="tooltip-item">
                        <span className="tooltip-name">{item.name}: </span>
                        <span className="tooltip-value">${item.value}</span>
                    </p>
                ))}
            </div>
        );
    }

    return null;
};

const CustomerSatisfactionChart: React.FC = () => {
    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={250}>
                <AreaChart
                    data={data}
                    margin={{ top: 20, right: 30, left: -10, bottom: 50 }}
                >
                    <defs>
                        <linearGradient
                            id="lastMonthGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.5} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient
                            id="thisMonthGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.5} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <YAxis hide />
                    <CartesianGrid vertical={false} stroke="#f5f5f5" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        iconSize={8}
                        wrapperStyle={{ top: -10, right: 0 }}
                    />
                    <Area
                        type="monotone"
                        dataKey="lastMonth"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#lastMonthGradient)"
                        name="Last Month"
                    />
                    <Area
                        type="monotone"
                        dataKey="thisMonth"
                        stroke="#82ca9d"
                        fillOpacity={1}
                        fill="url(#thisMonthGradient)"
                        name="This Month"
                    />
                    <XAxis
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12, fill: '#8884d8' }}
                    />
                </AreaChart>
            </ResponsiveContainer>
            <div className="legend-container">
                <div className="legend-item">
                    <span
                        className="legend-color"
                        style={{ backgroundColor: '#8884d8' }}
                    ></span>
                    <span className="legend-text">Last Month: $3,004</span>
                </div>
                <div className="legend-item">
                    <span
                        className="legend-color"
                        style={{ backgroundColor: '#82ca9d' }}
                    ></span>
                    <span className="legend-text">This Month: $4,504</span>
                </div>
            </div>
        </div>
    );
};

export default CustomerSatisfactionChart;
