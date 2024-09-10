export interface RouteType {
    path: string;
    name: string;
    icon: React.FC; // This is for the icon, which is JSX
    component: React.LazyExoticComponent<React.FC> | React.FC; // Type for component
}
