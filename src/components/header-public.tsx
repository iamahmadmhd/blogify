import Link from 'next/link';
import { NavMenu } from '@/types/navigation-menu';
import { ModeToggle } from '@/components/ui/mode-toggle';

export default async function PublicHeader({ menu }: { menu?: NavMenu }) {
    return (
        <header>
            <div className='absolute left-0 right-0 top-0 z-20 p-10'>
                <div className='flex items-center justify-between'>
                    <div>
                        <Link href={'/'} className='text-lg font-medium'>
                            Blogify
                        </Link>
                    </div>
                    <div>
                        <div className='flex items-center gap-x-4'>
                            {menu &&
                                menu.items.map((item) => (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className='text-sm'
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
