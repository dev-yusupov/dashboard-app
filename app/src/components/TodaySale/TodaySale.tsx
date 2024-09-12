import React from 'react';
import Stat from '../Stat/Stat';
import styles from './TodaySale.module.css';

import { HiChartBarSquare } from 'react-icons/hi2';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { HiUserAdd } from 'react-icons/hi';
import { MdLabelOutline } from 'react-icons/md';

const TodaySale: React.FC = () => {
    return (
        <div className={styles.todaySale}>
            <Stat
                backgroundColor="#FFE2E5"
                amount="$1k"
                icon={<HiChartBarSquare />}
                iconBackground="#FA5A7D"
                label="Total Sales"
                subLabel="+8% from yesterday"
            />
            <Stat
                backgroundColor="#FFF4DE"
                amount="300"
                icon={<IoDocumentTextOutline />}
                iconBackground="#FF947A"
                label="Total Order"
                subLabel="+5% from yesterday"
            />
            <Stat
                backgroundColor="#DCFCE7"
                amount="5"
                icon={<MdLabelOutline />}
                iconBackground="#3CD856"
                label="Product Sold"
                subLabel="+1.2% from yesterday"
            />
            <Stat
                backgroundColor="#F3E8FF"
                amount="8"
                icon={<HiUserAdd />}
                iconBackground="#BF83FF"
                label="New Customers"
                subLabel="+0.5% from yesterday"
            />
        </div>
    );
};

export default TodaySale;
