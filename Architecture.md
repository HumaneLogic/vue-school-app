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

create tables in postgres with writing migrations
fill tables with faker in seed.js

---

components
pages
App.vue

---

data fetching:

instant page update only for parts that has been changed, after we used the cache to show data:
user gets instant feedback with cached data because they loaded this page before.
after that, when user navigates away and comes back, we revalidate data in the background and we change the parts that has been changed from database
user doesn't see loading (gets cached data) and gets updated data at the same time

summery:
serve users with cached data while querying db for updating cache ,
so if data changed,when user navigating away and back to page,cache is served data is updated

first time user visits a page , it has a delay and display loading data for a moment
next time we display cached data and even if there is changed data from database, vue will only update the parts that has been changed

we have two things :
reactive variable (store)
function to query db and sync cache with db

projects.ts

flow:

if there is cache,template will use it and function runs: uses cache or updates cache
if there is no cache, function runs: updates cache

1.define a reactive variable which is the CACHE -
vue will set this on first time visit then we compare cache with db using validateCache() inside getProjects
const projects = ref<Projects>([])

2.User first time visiting the page projects/index.ts ,getProjects() runs : Query DB and Use useMemoize(query db) to cache the result reactively
await projectsQuery

3.Check the Cache :
projectsQuery.then() .then means we got data from db at this time

IF we have cache data, compare cache with db:
if cache is the same as db ,do nothing
if cache is outdated,delete cache and update the reactive variable with data that is now ready from db:
remember at this state that cache is outdated,we are serving the user with cache but we replace it data that we got from db

so every time getProjects() runs,it queries db and compares cache with db

4.if there is error,set the error store, if there is no error, save the result in the variable
if (error) useErrorStore().setError({ error, customCode: status })

5.if we don't have cache data, cache it
if (data) projects.value = data

6.use reactive variable in html and bind it ,now vue will only update the parts that has been changed(it only needs to replace data and nothing else like html ,css)

---

#TODO
site should get in sync with server automatically meaning we should always check the server for changes (with webhooks we listen for changes),if site has outdated data it will fetch it immediately

user can remain on the page and when something changes in database,we get it in-place after a while without needing to navigating away and coming back to rerun the function

serve users with cached data while querying db for updates

update on page refresh
update on navigation away from current page
in place update

update with request
update with page visit
update with webhook

determine size of data for each page and the whole db size

the ui and data will be in cache and storage
option for cache and storage delete

use diffing algorithm to sync cache with db
update cache base on predicting how will data change in db instead of querying db

--
