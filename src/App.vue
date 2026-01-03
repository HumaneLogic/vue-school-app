<script setup lang="ts">
// if we want to destruct something out of store and maintain its reactivity,we need to wrap the store with storeToRefs
const { activeError } = storeToRefs(useErrorStore())
</script>

<template>
  <AuthLayout>
    <AppErrorPage v-if="activeError" />

    <RouterView v-else v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name"></Component>

        <template #fallback>
          <span>Loading... </span>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
