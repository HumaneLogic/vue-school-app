<script setup lang="ts">
// this gives:
//  [Vue warn]: Component <Anonymous>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.
// we have to do
// <Suspense>
//   <MocComponent />
// </Suspense>
// Suspense allows for top level async functions in components and renders them when they resolve
// and
//     <Suspense>
//       <MocComponent />
//      fallback is being replaced when promise is still being resolved
//       <template #fallback>
//         <span>Loading</span>
//       </template>
//     </Suspense>

const MocComponent = defineComponent(async () => {
  const greet = ref('Hello')
  await new Promise((resolve, reject) => {
    greet.value = 'Hello from database'
    // resolve(true)
    // reject(true)
    setTimeout(() => {
      resolve(true)
    }, 1500)
  })
  return () => h('p', greet.value)
})

// const MocComponent = defineComponent(() => {
//   const greet = ref('Hello')
//   return () => h('p', greet.value)
// })
</script>

<template>
  <AuthLayout>
    <Suspense>
      <MocComponent />

      <template #fallback>
        <span>Loading... </span>
      </template>
    </Suspense>
    <RouterView />
  </AuthLayout>
</template>
