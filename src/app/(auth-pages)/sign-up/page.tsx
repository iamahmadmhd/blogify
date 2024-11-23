import { signUpAction } from '@/app/actions';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/src/components/ui/button';

export default async function Signup(props: any) {
    return (
        <>
            <form className='mx-auto max-w-md py-10 lg:py-16'>
                <h1 className='text-2xl font-medium'>Sign up</h1>
                <p className='text text-sm text-foreground'>
                    Already have an account?{' '}
                    <Link
                        className='font-medium text-primary underline'
                        href='/sign-in'
                    >
                        Sign in
                    </Link>
                </p>
                <div className='mt-8 flex flex-col gap-2 [&>input]:mb-3'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                        name='email'
                        placeholder='you@example.com'
                        required
                    />
                    <Label htmlFor='password'>Password</Label>
                    <Input
                        type='password'
                        name='password'
                        placeholder='Your password'
                        minLength={6}
                        required
                    />
                    <Button formAction={signUpAction}>Sign up</Button>
                </div>
            </form>
        </>
    );
}
