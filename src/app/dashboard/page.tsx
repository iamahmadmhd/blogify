import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function adminPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const { data: posts } = await supabase.from('Posts').select();

    if (!user) {
        return redirect('/sign-in');
    }

    return (
        <>
            <div className='mx-auto max-w-4xl py-20'>Dashboard</div>
        </>
    );
}
