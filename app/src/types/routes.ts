import { ReactNode } from 'react';

export interface RouteType {
    path: string;
    name: string;
    icon: ReactNode; // This is for the icon, which is JSX
    component: React.LazyExoticComponent<React.FC> | React.FC; // Type for component
}
