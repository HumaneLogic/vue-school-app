<script setup lang="ts"></script>
<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 'default' } }">Projects</RouterLink>
    <RouterLink :to="{ name: '/tasks/[id]', params: { id: 'default' } }">Tasks</RouterLink>
    <!-- <RouterLink to="/projects">Go to Projects</RouterLink> -->
    <RouterLink to="/about">About</RouterLink>
  </div>
</template>
