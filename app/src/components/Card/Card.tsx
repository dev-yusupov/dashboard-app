import React, { ReactNode } from 'react';
import './Card.css';

/**
 * @param {string} title - The required text, will be displayed at the top of the card
 * @param {string} description - Description of the card will be displayed below the title
 * @param {React.FC} content - React component where user defines what to display
 */

interface CardProps {
    title: string;
    description?: string;
    content: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, content }) => (
    <div className="card">
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        {content}
    </div>
);

export default Card;
