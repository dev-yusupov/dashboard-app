import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import styles from './Language.module.css';

const Language: React.FC = () => {
    return (
        <div className={styles.languageContainer}>
            <h5 data-testid="language-en">Eng (US)</h5>
            <MdKeyboardArrowDown size={25} data-testid="language-icon-arrowdown" />
        </div>
    );
};

export default Language;
