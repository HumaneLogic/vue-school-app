<script setup lang="ts">
useErrorStore().setError({ error: 'Page not found', customCode: 404 })
</script>

<template>
  <div></div>
</template>

<!-- error system  -->

<!-- 1. define a useErrorStore function for setting the error state from anywhere in the application -
 for arguments we give it arbitrary error code/message or get them from postgrest or javascript native errors -->

<!-- 2. define an error page component components/AppError : AppErrorPage.vue - this component gets the arguments and display -->

<!-- 3. define a page for catch all other routes pages: [...catchAll].vue -->

<!-- 4. when visiting undefined routes, user goes to catchAll page and the error state gets set with the values developer provide to the function -->

<!-- 5. in App.vue , if there is an error we display error page, no matter what page user is currently visiting -->
<!--  <AppErrorPage v-if="errorStore.activeError" /> -->

<!-- summery:
 1.user goes to catchAll page if it's not a defined page
 2.setError will run and set the global error state
 3.AppErrorPage component gets the error and displays the component -->
