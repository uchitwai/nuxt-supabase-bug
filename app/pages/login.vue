<script lang="ts" setup>
import type { Database } from '#shared/types/database.types'
import type { User } from '@supabase/auth-js/src/lib/types'

definePageMeta({
  middleware: [
    () => {
      const user = useState<User | null>('user')
      if (user.value) return navigateTo('/')
    }
  ]
})

const supabase = useSupabaseClient<Database>()
const state = reactive({
  email: '',
  password: ''
})

async function onSubmit() {
  try {
    const { error } = await supabase.auth.signInWithPassword({ ...state })

    if (error) return alert(error.message)

    navigateTo('/')
  }
  catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <UForm v-slot="{ loading }" :state class="w-fit space-y-4 mx-auto" @submit="onSubmit">
    <h1 class="text-center font-bold text-lg">Login</h1>

    <UFormField label="Email" name="email">
      <UInput v-model.trim="state.email" required/>
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" required type="password"/>
    </UFormField>

    <UButton :loading label="login" type="submit"/>
  </UForm>
</template>
