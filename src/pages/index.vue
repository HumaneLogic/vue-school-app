<script setup lang="ts"></script>
<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 321 } }">Go to Projects</RouterLink>
    <!-- <RouterLink to="/projects">Go to Projects</RouterLink> -->
    <RouterLink to="/about">Go to About</RouterLink>
  </div>
</template>
