<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div>
    <h1>No Page Is In This Address: {{ route.fullPath }} - 404 Not Found</h1>
  </div>
</template>
