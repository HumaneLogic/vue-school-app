<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
console.log(supabase)
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<!--
 1.SPA: RouterView from vue-router - vue-router maps components to routs - uses the browser history api to handle navigating between pages without reloading the entire page
 2.lazy loading  - dynamic imports - load components only when needed
 3.file-based routing
-->
