'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Github, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signUpAction } from '@/app/actions';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    async function onSubmit(formData: FormData) {
        setIsLoading(true);
        console.log({ formData });
        signUpAction(formData).finally(() => setIsLoading(false));
    }

    return (
        <div className={cn('grid gap-6', className)} {...props}>
            <form>
                <div className='grid gap-2'>
                    <div className='grid gap-1'>
                        <Label className='sr-only' htmlFor='email'>
                            Email
                        </Label>
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
                        <Label className='sr-only' htmlFor='password'>
                            Password
                        </Label>
                        <Input
                            id='password'
                            placeholder='A strong password'
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
                        Sign up with Email
                    </Button>
                </div>
            </form>
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
            <Button variant='outline' type='button' disabled={isLoading}>
                {isLoading ? (
                    <Loader className='mr-2 h-4 w-4 animate-spin' />
                ) : (
                    <Github className='mr-2 h-4 w-4' />
                )}{' '}
                GitHub
            </Button>
        </div>
    );
}
