
import { createClient } from '@/utils/superbase/server';
import { cookies } from 'next/headers';

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>{todo}</li>
      ))}
    </ul>
  )
}
