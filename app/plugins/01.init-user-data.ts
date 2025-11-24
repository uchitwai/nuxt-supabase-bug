import type { Database } from '#shared/types/database.types'
import type { User } from '@supabase/auth-js/src/lib/types'

export default defineNuxtPlugin(async () => {
  const supabase = useSupabaseClient<Database>()
  const user = useState<User | null>('user', () => null)

  const { data: { user: $user } } = await supabase.auth.getUser()

  user.value = $user

  if (!import.meta.client) return

  supabase.auth.onAuthStateChange(async (event, session) => {
    if (session) {
      const { data: { user: $user } } = await supabase.auth.getUser()
      user.value = $user
      return
    }

    user.value = null
  })
})
