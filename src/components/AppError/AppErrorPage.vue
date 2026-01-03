<script setup lang="ts">
const router = useRouter()
router.afterEach(() => {
  useErrorStore().activeError = false
})
</script>
<template>
  <section class="error">
    <div>
      <iconify-icon icon="tdesign:error-triangle" class="error__icon"></iconify-icon>
      <h1 class="error__code">404</h1>
      <p class="error__msg">Page not Found</p>
      <div class="error-footer">
        <p class="error-footer__text">You'll find lots to explore on the home page</p>
        <RouterLink to="/">
          <Button class="max-w-36"> Back to homepage</Button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "../../assets/style.css";

.error {
  @apply mx-auto flex justify-center items-center flex-1 p-10 text-center -mt-20 min-h-[90hv];
}

.error__icon {
  @apply mx-auto flex justify-center items-center  p-10;
}
.error__code {
  @apply font-extrabold text-7xl text-secondary;
}
.error__msg {
  @apply font-extrabold text-3xl text-primary;
}
.error-footer {
  @apply flex flex-col items-center justify-center gap-5 mt-6 font-light;
}
.error-footer__text {
  @apply text-lg text-muted-foreground;
}
p {
  @apply my-2;
}
</style>
