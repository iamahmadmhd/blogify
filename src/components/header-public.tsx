import Link from 'next/link';
import { buttonVariants } from './ui/button';

export default function PublicHeader() {
    return (
        <header className='flex h-16 w-full justify-center border-b border-b-foreground/10'>
            <nav className='flex w-full max-w-5xl items-center justify-between p-3 px-5 text-sm'>
                <div className='flex items-center gap-5 font-semibold'>
                    <Link href={'/'}>Blogify</Link>
                </div>
                <div className='flex items-center gap-5 font-semibold'>
                    <Link href={'/sign-in'}>Sign in</Link>
                    <Link className={buttonVariants({ variant: "default" })} href={'/sign-up'}>Sign up</Link>
                </div>
            </nav>
        </header>
    );
}
