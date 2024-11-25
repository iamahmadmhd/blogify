import PublicHeader from '@/components/header-public';
import { ReactNode } from 'react';

export default async function Layout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <>
            <PublicHeader />
            <div className='flex min-h-svh flex-col items-center justify-center'>
                <div className='lg:p-8'>
                    <div className='flex flex-col justify-center md:w-[320px] space-y-6 w-full'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
