import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';

import styles from './Notification.module.css';

const Notification: React.FC = () => {
    return (
        <div className={styles.notificationContainer}>
            <IoMdNotificationsOutline size={20} color="FFA412" />
        </div>
    );
};

export default Notification;
