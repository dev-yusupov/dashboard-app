// src/pages/NotFound/NotFound.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'; // Import your CSS file for styling
import Button from '../../components/Button/Button';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <>
            <Helmet>
                <title>Page Not Found (404) - Dabang</title>
            </Helmet>
            <div className="not-found-container">
                <div className="not-found-content">
                    <h1 className="not-found-title">404</h1>
                    <p className="not-found-message">
                        Oops! The page you’re looking for doesn’t exist.
                    </p>
                    <Button label="Go to Homepage" onClick={handleGoHome} />
                </div>
            </div>
        </>
    );
};

export default NotFound;
