<script setup lang="ts">
interface LinkProp {
  title: string
  to: string
  icon: string
}
defineProps<{
  links: LinkProp[]
}>()
</script>

<template>
  <RouterLink
    exact-active-class="text-primary bg-muted"
    v-for="link in links"
    :key="link.title"
    :to="link.to"
    class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:hover:scale-105 hover:text-blue-300"
  >
    <iconify-icon :icon="link.icon"></iconify-icon>
    <span class="hidden lg:block text-nowrap">{{ link.title }}</span>
  </RouterLink>
</template>

<!-- <style scoped>
.router-link-active {
  background-color: black;
}
</style> -->
