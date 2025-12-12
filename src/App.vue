<script setup lang="ts">
// import { supabase } from '@/lib/supabaseClient'
// console.log(supabase)
// import Button from './components/ui/button/Button.vue'
</script>

<template>
  <div>
    <nav class="h-16 border-b bg-muted/40 flex justify-between px-6 items-center">
      <form class="w-full max-w-96">
        <input class="w-full pl-8 bg-background" type="text" placeholder="Search..." />
      </form>
      <div class="w-8 h-8 rounded-full bg-black"></div>
      <!-- <Button>click</Button> -->
    </nav>
  </div>

  <main>
    <RouterView />
  </main>
</template>

<!--
 1.SPA: RouterView from vue-router - vue-router maps components to routs - it uses the browser history api to handle navigating between pages without reloading the entire page
 2.lazy loading  - dynamic imports - load components only when needed
 3.file-based routing
-->
