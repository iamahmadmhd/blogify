export interface NavItem {
    title: string;
    href: string;
    icon?: React.ReactNode;
}

export interface NavMenu {
    title: string;
    items: NavItem[];
}