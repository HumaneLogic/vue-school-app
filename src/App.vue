<script setup lang="ts"></script>

<!-- <Suspense> is designed to hold the previous component until the new one’s async setup resolves.  -->

<template>
  <AuthLayout>
    <RouterView v-slot="{ Component, route }">
      <!-- v-if="Component" means this component wouldn't work unless RouterView provides a component -->
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name"></Component>

        <template #fallback>
          <span>Loading... </span>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
