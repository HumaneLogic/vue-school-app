<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <h1>Project {{ route.params?.slug }}</h1>
    <RouterLink to="/">Home</RouterLink>
  </div>
</template>
