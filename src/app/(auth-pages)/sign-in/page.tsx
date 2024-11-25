'use client';

import { signInAction } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Loader, Github } from 'lucide-react';
import { HTMLAttributes, useState } from 'react';

export interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> {}

export default function Login() {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function onSubmit(formData: FormData) {
        setIsLoading(true);
        setTimeout(() => {
            signInAction(formData);
        }, 1000);
    }
    return (
        <>
            <div className='flex flex-col space-y-2 text-center'>
                <h1 className='text-2xl font-semibold tracking-tight'>
                    Sign in to your account
                </h1>
                <p className='text-sm text-muted-foreground'>
                    No registered yet?{' '}
                    <Link href='/sign-up' className='underline'>
                        Sign up
                    </Link>
                </p>
            </div>
            <div className={cn('grid gap-6')}>
                <Button variant='outline' type='button' disabled={isLoading}>
                    {isLoading ? (
                        <Loader className='mr-2 h-4 w-4 animate-spin' />
                    ) : (
                        <Github className='mr-2 h-4 w-4' />
                    )}{' '}
                    GitHub
                </Button>
                <div className='relative'>
                    <div className='absolute inset-0 flex items-center'>
                        <span className='w-full border-t' />
                    </div>
                    <div className='relative flex justify-center text-xs uppercase'>
                        <span className='bg-background px-2 text-muted-foreground'>
                            Or continue with
                        </span>
                    </div>
                </div>
                <form>
                    <div className='grid gap-4'>
                        <div className='grid gap-1'>
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                id='email'
                                placeholder='name@example.com'
                                type='email'
                                name='email'
                                autoCapitalize='none'
                                autoComplete='email'
                                autoCorrect='off'
                                disabled={isLoading}
                            />
                        </div>
                        <div className='grid gap-1'>
                            <Label htmlFor='password'>Password</Label>
                            <Input
                                id='password'
                                placeholder='Your password'
                                type='password'
                                name='password'
                                autoCapitalize='none'
                                autoComplete='password'
                                autoCorrect='off'
                                disabled={isLoading}
                            />
                        </div>
                        <Button disabled={isLoading} formAction={onSubmit}>
                            {isLoading && (
                                <Loader className='mr-2 h-4 w-4 animate-spin' />
                            )}
                            Sign in with Email
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
