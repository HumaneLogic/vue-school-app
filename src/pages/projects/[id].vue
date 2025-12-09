<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div>
    <h1>Project {{ route.params }}</h1>
  </div>
</template>
