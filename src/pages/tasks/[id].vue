<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <h1>Task {{ route.params?.id }}</h1>
    <RouterLink to="/">Home</RouterLink>
  </div>
</template>
