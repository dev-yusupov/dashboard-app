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
import Dashboard from '../pages/Dashboard/Dashboard';

export const mainRoutes: RouteType[] = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: FaChartPie,
        component: Dashboard,
    },
    {
        path: '/leaderboard',
        name: 'Leaderboard',
        icon: LuBarChart2,
        component: Dashboard,
    },
    {
        path: '/order',
        name: 'Order',
        icon: LuShoppingCart,
        component: Dashboard,
    },
    {
        path: '/products',
        name: 'Products',
        icon: RiShoppingBag4Line,
        component: Dashboard,
    },
    {
        path: '/sales-report',
        name: 'Sales Report',
        icon: LuLineChart,
        component: Dashboard,
    },
    {
        path: '/messages',
        name: 'Messages',
        icon: LuMessageSquare,
        component: Dashboard,
    },
    {
        path: '/settings',
        name: 'Settings',
        icon: IoSettingsOutline,
        component: Dashboard,
    },
    {
        path: '/signout',
        name: 'Sign Out',
        icon: PiSignOut,
        component: Dashboard,
    },
];
