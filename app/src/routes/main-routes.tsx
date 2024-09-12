// routes/index.ts
import { FaChartPie } from 'react-icons/fa';
import {
    LuBarChart2,
    LuMessageSquare,
    LuLineChart,
    LuShoppingCart,
} from 'react-icons/lu';
import { PiSignOut } from 'react-icons/pi';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiShoppingBag4Line } from 'react-icons/ri';

import { RouteType } from '../types/routes';
import Main from '../pages/Main/Main';

export const mainRoutes: RouteType[] = [
    {
        path: '/',
        name: 'Dashboard',
        icon: <FaChartPie />,
        component: Main,
    },
    {
        path: '/leaderboard',
        name: 'Leaderboard',
        icon: <LuBarChart2 />,
        component: Main,
    },
    {
        path: '/order',
        name: 'Order',
        icon: <LuShoppingCart />,
        component: Main,
    },
    {
        path: '/products',
        name: 'Products',
        icon: <RiShoppingBag4Line />,
        component: Main,
    },
    {
        path: '/sales-report',
        name: 'Sales Report',
        icon: <LuLineChart />,
        component: Main,
    },
    {
        path: '/messages',
        name: 'Messages',
        icon: <LuMessageSquare />,
        component: Main,
    },
    {
        path: '/settings',
        name: 'Settings',
        icon: <IoSettingsOutline />,
        component: Main,
    },
    {
        path: '/signout',
        name: 'Sign Out',
        icon: <PiSignOut />,
        component: Main,
    },
];
