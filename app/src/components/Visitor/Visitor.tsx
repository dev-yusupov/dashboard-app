import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';

const VisitorInsights = () => {
    // Mock data (adjust as needed)
    const data = [
        { name: 'Jan', loyal: 330, new: 80, unique: 140 },
        { name: 'May', loyal: 150, new: 100, unique: 200 },
        { name: 'Aug', loyal: 80, new: 240, unique: 170 },
        { name: 'Dec', loyal: 250, new: 180, unique: 300 },
    ];

    return (
        <div style={{ width: '100%', height: 300 }} role="region">
            <ResponsiveContainer>
                <LineChart data={data} data-testid="recharts-linechart">
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="name" data-testid="recharts-xaxis" />
                    <YAxis domain={[0, 400]} data-testid="recharts-yaxis" />
                    <Tooltip data-testid="recharts-tooltip-wrapper" />
                    <Legend data-testid="recharts-legend-wrapper" />
                    <Line
                        type="monotone"
                        dataKey="loyal"
                        stroke="#3CD856"
                        data-testid="recharts-line"
                    />
                    <Line
                        type="monotone"
                        dataKey="new"
                        stroke="#A700FF"
                        data-testid="recharts-line"
                    />
                    <Line
                        type="monotone"
                        dataKey="unique"
                        stroke="#EF4444"
                        data-testid="recharts-line"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default VisitorInsights;
