<script setup lang="ts"></script>
<template>
  <aside
    class="flex flex-col h-screen gap-2 border-r fixed bg-muted/40 lg:w-52 w-16 transition-[width]"
  >
    <div class="flex h-16 items-center border-b px-2 lg:px-4 shrink-0 gap-1 justify-between">
      <button variant="outline" size="icon" class="w-8 h-8">
        <iconify-icon icon="lucide:menu"></iconify-icon>
      </button>

      <button variant="outline" size="icon" class="w-8 h-8">
        <iconify-icon icon="lucide:plus"></iconify-icon>
      </button>
    </div>

    <nav class="flex flex-col gap-2 justify-between h-full relative">
      <div>
        <RouterLink
          to="/"
          class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:hover:scale-105 hover:text-blue-300"
        >
          <iconify-icon icon="lucide:layout-dashboard"></iconify-icon>
          <span class="hidden lg:block text-nowrap">Dashboard</span>
        </RouterLink>

        <RouterLink
          to="/projects"
          class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:hover:scale-105 hover:text-blue-300"
        >
          <iconify-icon icon="lucide:house"></iconify-icon>
          <span class="hidden lg:block text-nowrap">Projects</span>
        </RouterLink>

        <RouterLink
          to="/tasks"
          class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:hover:scale-105 hover:text-blue-300"
        >
          <iconify-icon icon="streamline-freehand:task-list-pin-1"></iconify-icon>
          <span class="hidden lg:block text-nowrap">My Tasks</span>
        </RouterLink>
      </div>

      <div class="border-y text-center bg-background py-3">
        <RouterLink
          to="/profile"
          class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:hover:scale-105 hover:text-blue-300"
        >
          <iconify-icon icon="iconoir:profile-circle"></iconify-icon>
          <span class="hidden lg:block text-nowrap">Profile</span>
        </RouterLink>
        <RouterLink
          to="/settings"
          class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:hover:scale-105 hover:text-blue-300"
        >
          <iconify-icon icon="line-md:cog-filled-loop"></iconify-icon>
          <span class="hidden lg:block text-nowrap">Settings</span>
        </RouterLink>
        <RouterLink
          to="/signout"
          class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:hover:scale-105 hover:text-blue-300"
        >
          <iconify-icon icon="si:sign-out-alt-line"></iconify-icon>
          <span class="hidden lg:block text-nowrap">Sign Out</span>
        </RouterLink>
      </div>
    </nav>
  </aside>
</template>

<!-- class="border-y text-center bg-background py-3" -->
