// src/pages/NotFound/NotFound.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFound: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Page Not Found (404) - Dabang</title>
            </Helmet>
            <div>Page Not Found</div>
        </>
    );
};

export default NotFound;
