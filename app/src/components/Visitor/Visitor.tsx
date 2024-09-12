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
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 400]} /> {/* Set the y-axis domain */}
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="loyal" stroke="#3CD856" />
                    <Line type="monotone" dataKey="new" stroke="#A700FF" />
                    <Line type="monotone" dataKey="unique" stroke="#EF4444" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default VisitorInsights;
