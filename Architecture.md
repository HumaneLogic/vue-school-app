Error System Flow

1. define a useErrorStore function for setting the error state from anywhere in the application (using pinia) -
   for arguments we give it arbitrary error code/message or get them from postgrest or javascript native errors

2. define an error page component components/AppError : AppErrorPage.vue - this component gets the arguments and display

3. define a page for catch all other routes pages: [...catchAll].vue

4. when visiting undefined routes, user goes to catchAll page and the error state gets set with the values developer provide to the function

5. in App.vue , if there is an error we display error page, no matter what page user is currently visiting
   <AppErrorPage v-if="errorStore.activeError" />

summery:
1.user goes to catchAll page if it's not a defined page
2.store gets updated: setError will run and set the global error state
3.AppErrorPage component gets the error and runs
4.clear error on navigation

catchAll => set error state to true
on error true => component runs

---

clear error on navigation:
in AppErrorPage.vue set global error state to null after each time we navigate to any page

---

useErrorStore function accepts these errors types :
custom
native js
postgrest/supabase

---

with native js support we can

1.  do this useErrorStore().setError({ error: Error('i want to send an error here')})
2.  use onErrorCaptured for uncaught js errors: we give the useErrorStore function the error

---

in vue,errors propagate like events do in the DOM
they bubble up from the component that caused the error to its parent and to root component
with onErrorCaptured we capture any errors and give to useErrorStore

---

use app.config.errorHandler = (error) => {} in main.ts to have highest control over error handling

---

page
store
component

user goes to a page route,
this sets a global data in store,
a component uses that global data and displays it

---
