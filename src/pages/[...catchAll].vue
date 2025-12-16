<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <h1>No Page Is In This Address: {{ route.fullPath }} - 404 Not Found</h1>
    <RouterLink to="/">Home</RouterLink>
  </div>
</template>
