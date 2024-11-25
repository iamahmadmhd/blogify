import { Star, Home, Bell, UserPen, Settings } from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { NavUser } from '@/components/nav-user';
import { createClient } from '@/utils/supabase/server';

// Menu items.
const items = [
    {
        title: 'Home',
        slug: 'dashboard',
        icon: Home,
    },
    {
        title: 'Notifications',
        slug: 'notifications',
        icon: Bell,
    },
    {
        title: 'Popular',
        slug: 'popular',
        icon: Star,
    },
    {
        title: 'Blogs',
        slug: 'blogs',
        icon: UserPen,
    },
    {
        title: 'Settings',
        slug: 'settings',
        icon: Settings,
    },
];

interface Profile {
    first_name: string;
    last_name: string;
    email: string;
    profile_image: string;
    id: string;
    created_at: string;
    updated_at: string;
    bio: string;
    role: string;
}

export async function AppSidebar() {
    //const pathName = usePathname();
    const supabase = await createClient();
    const { data: userData } = await supabase.auth.getUser();
    const { data: profileData, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userData?.user?.id)
        .single();

    return (
        <>
            <Sidebar variant='inset'>
                <SidebarHeader className='font-bold'>Blogify</SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link href={item.slug}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                    {profileData && <NavUser user={profileData} />}
                </SidebarFooter>
            </Sidebar>
        </>
    );
}
