<script setup lang="ts">
import { taskQuery, type Task } from '@/utils/supaQueries'

// define a ref to store the task data
// write a function to fetch the task
// set up supabase query and define the query type
// use watch to update the page title
// update the template with the fetched data

const route = useRoute('/tasks/[id]')
const task = ref<Task | null>(null)

watch(
  () => task.value?.name,
  () => {
    usePageStore().pageData.title = `Task: ${task.value?.name || ''}`
  },
)

const getTask = async () => {
  const { data, error, status } = await taskQuery(Number(route.params.id))
  if (error) useErrorStore().setError({ error, customCode: status })
  task.value = data
}
await getTask()
</script>

<template>
  <div>
    <Table v-if="task">
      <TableRow>
        <TableHead> Name </TableHead>
        <TableCell>
          {{ task.name }}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHead> Description </TableHead>
        <TableCell>
          {{ task.description }}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHead> Assignee </TableHead>
        <TableCell> Lorem ipsum dolor sit amet. </TableCell>
      </TableRow>
      <TableRow>
        <TableHead> Project </TableHead>
        <TableCell> {{ task.projects?.name }} </TableCell>
      </TableRow>
      <TableRow>
        <TableHead> Status </TableHead>
        <TableCell> {{ task.status }} </TableCell>
      </TableRow>
      <TableRow>
        <TableHead> Collaborators </TableHead>
        <TableCell>
          <div class="flex">
            <Avatar
              class="-mr-4 border border-primary hover:scale-110 transition-transform"
              v-for="collab in task.collaborators"
              :key="collab"
            >
              <RouterLink class="w-full h-full flex items-center justify-center" to="">
                <AvatarImage src="" alt="" />
                <AvatarFallback> </AvatarFallback>
              </RouterLink>
            </Avatar>
          </div>
        </TableCell>
      </TableRow>
      <TableRow class="hover:bg-transparent">
        <TableHead class=""> Comments </TableHead>
        <TableCell>
          Comments goes in here ...
          <div class="flex flex-col justify-between p-2 bg-muted my-3 rounded-md">
            <textarea
              placeholder="Add your comment..."
              class="w-full max-w-full overflow-y-auto prose-sm border rounded dark:prose-invert hover:border-muted bg-background border-muted"
            ></textarea>
            <div class="flex justify-between mt-3">
              <Button> Comment </Button>
              <div class="flex gap-4">
                <button variant="ghost" @click.prevent>
                  <iconify-icon icon="wpf:attach"></iconify-icon>
                  <span class="sr-only">Attach file</span>
                </button>
                <button variant="ghost" @click.prevent>
                  <iconify-icon icon="uil:image-upload"></iconify-icon>
                  <span class="sr-only">Upload image</span>
                </button>
              </div>
            </div>
          </div>
        </TableCell>
      </TableRow>
    </Table>
  </div>
</template>

<style scoped>
@reference "tailwindcss";
@reference "../../assets/style.css";

th {
  @apply w-25;
}

h2 {
  @apply mb-4 text-lg font-semibold w-fit;
}

.table-container {
  @apply overflow-hidden overflow-y-auto rounded-md bg-slate-900 h-80;
}
</style>
