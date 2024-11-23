import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <>
            {/* Hero */}
            <div className='bg-secondary py-24 lg:py-32'>
                <div className='py-10 lg:py-16'>
                    <div className='mx-auto max-w-2xl text-center'>
                        <p className=''>
                            Unleash Your Voice, Inspire the World
                        </p>
                        {/* Title */}
                        <div className='mt-5 max-w-2xl'>
                            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
                                Blogify
                            </h1>
                        </div>
                        {/* End Title */}
                        <div className='mt-5 max-w-3xl'>
                            <p className='text-lg'>
                                the platform where ideas thrive and stories
                                connect. Share your thoughts, discover fresh
                                perspectives, and join a vibrant community of
                                creators. Your story starts here.
                            </p>
                        </div>
                        {/* Buttons */}
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
                        {/* End Buttons */}
                    </div>
                </div>
            </div>
            {/* End Hero */}
        </>
    );
}
