import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { BackgroundBeams } from '@/components/ui/BackgroundBeams';

export default function HeroSection() {
    return (
        <>
            <div className='relative flex h-screen w-full items-center justify-center overflow-hidden bg-background p-20'>
                <div className='relative z-10 mx-auto max-w-2xl text-center'>
                    <p className='text-sm'>
                        Unleash Your Voice, Inspire the World
                    </p>
                    <div className='mt-5 max-w-2xl'>
                        <h1 className='scroll-m-20 font-extrabold tracking-tight text-6xl lg:text-7xl bg-gradient-to-br from-slate-900 to-slate-600 dark:from-gray-100 dark:to-gray-400 text-transparent bg-clip-text inline'>
                            Blogify
                        </h1>
                    </div>
                    <div className='mt-5 max-w-3xl'>
                        <p className='text-sm'>
                            the platform where ideas thrive and stories connect.
                            Share your thoughts, discover fresh perspectives,
                            and join a vibrant community of creators. Your story
                            starts here.
                        </p>
                    </div>
                    <div className='mt-8 flex justify-center gap-3'>
                        <Link
                            href={'/sign-up'}
                            className={buttonVariants({
                                variant: 'default',
                                size: 'lg',
                            })}
                        >
                            Get started
                        </Link>
                        <Link
                            href={'/'}
                            className={buttonVariants({
                                variant: 'outline',
                                size: 'lg',
                            })}
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
                <BackgroundBeams />
            </div>
            
        </>
    );
}
