<script setup lang="ts"></script>

<template>
  <nav class="h-16 border-b bg-muted/40 flex justify-between px-6 items-center">
    <form class="relative h-fit w-full max-w-96">
      <iconify-icon
        class="absolute top-[50%] translate-y-[-50%] left-2.5"
        icon="lucide:search"
      ></iconify-icon>
      <Input class="w-full pl-8 bg-background" type="text" placeholder="Search..." />
    </form>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem> Task </DropdownMenuItem>
        <DropdownMenuItem> Project </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </nav>
</template>
