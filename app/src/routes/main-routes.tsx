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
import Product from '../pages/Product/Product';

export const mainRoutes: RouteType[] = [
    {
        path: '/d/main',
        name: 'Dashboard',
        icon: <FaChartPie />,
        component: Main,
    },
    {
        path: '/d/leaderboard',
        name: 'Leaderboard',
        icon: <LuBarChart2 />,
        component: Main,
    },
    {
        path: '/d/order',
        name: 'Order',
        icon: <LuShoppingCart />,
        component: Main,
    },
    {
        path: '/d/products',
        name: 'Products',
        icon: <RiShoppingBag4Line />,
        component: Product,
    },
    {
        path: '/d/sales-report',
        name: 'Sales Report',
        icon: <LuLineChart />,
        component: Main,
    },
    {
        path: '/d/messages',
        name: 'Messages',
        icon: <LuMessageSquare />,
        component: Main,
    },
    {
        path: '/d/settings',
        name: 'Settings',
        icon: <IoSettingsOutline />,
        component: Main,
    },
    {
        path: '/d/signout',
        name: 'Sign Out',
        icon: <PiSignOut />,
        component: Main,
    },
];
