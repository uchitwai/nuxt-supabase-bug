<script lang="ts" setup>
import type { Database } from '#shared/types/database.types'
import type { User } from '@supabase/auth-js/src/lib/types'

definePageMeta({
  middleware: [
    () => {
      const user = useState<User | null>('user')
      if (!user.value) return navigateTo('/login')
    }
  ]
})

const supabase = useSupabaseClient<Database>()
const loading = ref<boolean>(false)

async function onClick() {
  if (loading.value) return

  try {
    loading.value = true

    const { error } = await supabase.auth.signOut()

    if (error) return alert(error.message)

    navigateTo('/login')
  }
  catch (error) {
    console.error(error)
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="w-fit mx-auto p-4 flex flex-col gap-4 items-center">
    <h1>Hello World</h1>

    <UButton
      :loading
      color="neutral"
      label="Logout"
      variant="outline"
      @click="onClick"/>
  </div>
</template>
