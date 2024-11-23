import { signInAction } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/src/components/ui/button';
import Link from 'next/link';

export default async function Login(props: any) {
    return (
        <form className='mx-auto max-w-md py-10 lg:py-16'>
            <h1 className='text-2xl font-medium'>Sign in</h1>
            <p className='text-sm text-foreground'>
                Don&apos;t have an account?{' '}
                <Link
                    className='font-medium text-foreground underline'
                    href='/sign-up'
                >
                    Sign up
                </Link>
            </p>
            <div className='mt-8 flex flex-col gap-2 [&>input]:mb-3'>
                <Label htmlFor='email'>Email</Label>
                <Input name='email' placeholder='you@example.com' required />
                <div className='flex items-center justify-between'>
                    <Label htmlFor='password'>Password</Label>
                    <Link
                        className='text-xs text-foreground underline'
                        href='/forgot-password'
                    >
                        Forgot Password?
                    </Link>
                </div>
                <Input
                    type='password'
                    name='password'
                    placeholder='Your password'
                    required
                />
                <Button formAction={signInAction}>Sign in</Button>
            </div>
        </form>
    );
}
