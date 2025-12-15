<script setup lang="ts">
// import { supabase } from '@/lib/supabaseClient'
// console.log(supabase)
import Sidebar from '@/components/Layout/Sidebar.vue'
import TopNavbar from '@/components/Layout/TopNavbar.vue'
</script>

<template>
  <Sidebar />
  <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
    <TopNavbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<!--
 1.SPA: RouterView from vue-router - vue-router maps components to routs - it uses the browser history api to handle navigating between pages without reloading the entire page
 2.lazy loading  - dynamic imports - load components only when needed
 3.file-based routing
-->
