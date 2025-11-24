<script lang="ts" setup>
const supabase = useSupabaseClient<Database>()

async function onClick() {
  console.log('Click')

  /*
   * When logged in state, supabase client not working after switching to another browser tab and returning.
   */

  /*
   * Works when the user is not logged in.
   * Works after switching to another browser tab and returning.
   * Works when the user is logged in.
   * Does NOT work after switching to another browser tab and returning.
   *
   * - This issue appears to be independent of the browser type.
   *   (Tested on Edge, Chrome, and Firefox)
   * - This issue also occurs after the production build is deployed.
   *   (Tested by deploying on Cloudflare Pages)
   * - This issue seems to occur only when using Nuxt UI.
   *   (It does not occur when building the same project with DaisyUI.)
   */
  supabase.auth.getUser()
    .then(data => console.log('Then:', data))
    .catch(error => console.log('Catch:', error))
    .finally(() => console.log('Finally'))
}
</script>

<template>
  <UButton
    class="fixed top-1/2 left-1/2 -translate-1/2"
    color="error"
    label="Test"
    size="xl"
    @click="onClick"/>
</template>
