<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/types'

// const getProjects = async () => {
//   const { data, error } = await supabase.from('projects').select()
//   if (error) console.log(error)
//   console.log('Projects :', data)
// };

// const projects = ref<any[] | null>(null)
const projects = ref<Tables<'projects'>[] | null>(null)

;(async () => {
  const { data, error } = await supabase.from('projects').select()
  if (error) console.log(error)
  // console.log('Projects :', data)
  projects.value = data
  console.log('projects:', projects.value)
})()
</script>

<template>
  <div>
    <h1>Projects</h1>
    <RouterLink to="/">Home</RouterLink>
    <!-- we don't have to add .value , vue adds it -->
    <!-- now the template reacts to the changes that happens to projects variable-->
    <!-- {{ projects ? projects[0] : '' }} -->
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project }}
      </li>
    </ul>
  </div>
</template>

<!-- reactive variables: vue watches for changes in the variable and updates the dom accordingly -->

<!--  -->
<!-- npx supabase migration up --linked -->
