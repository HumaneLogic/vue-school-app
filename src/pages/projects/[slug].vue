<script setup lang="ts">
// #TODO
// 1.if update is to the project name then update the url slug(maybe use id or name instead of slug or we can go to projects using any one of those 3 )
// 2.redirect from old url slug to new url slug
// 3.add pop up window: edit project by clicking on different sections
// 4.add show history - so it's a version control system - maybe make it tied to github,gitlab and other systems

const { slug } = useRoute('/projects/[slug]').params

const projectsLoader = useProjectsStore()
const { project } = storeToRefs(projectsLoader)
const { getProject, updateProject } = projectsLoader

watch(
  () => project.value?.name,
  () => {
    usePageStore().pageData.title = `Project: ${project.value?.name || ''}`
  },
)

await getProject(slug)
</script>

<template>
  <div>
    <Table v-if="project">
      <TableRow>
        <TableHead> Name </TableHead>
        <TableCell>
          <!-- we pass project.name to child component which has const value = defineModel() and v-model="value" -->
          <!-- this is two way binding with a custom component  -->
          <AppInPlaceEditText v-model="project.name" @commit="updateProject" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHead> Description </TableHead>
        <TableCell>
          {{ project.description }}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHead> Status </TableHead>
        <TableCell>
          {{ project.status }}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHead> Collaborators </TableHead>
        <TableCell>
          <div class="flex">
            <Avatar
              class="-mr-4 border border-primary hover:scale-110 transition-transform"
              v-for="collab in project.collaborators"
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
    </Table>

    <section v-if="project" class="mt-10 flex flex-col md:flex-row gap-5 justify-between grow">
      <div class="flex-1">
        <h2>Tasks</h2>
        <div class="table-container">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead> Name </TableHead>
                <TableHead> Status </TableHead>
                <TableHead> Due Date </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow v-for="task in project.tasks" :key="task.id">
                <TableCell> Lorem ipsum dolor sit amet. </TableCell>
                <TableCell> In Progress. </TableCell>
                <TableCell> 20/12/2025. </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div class="flex-1">
        <h2>Documents</h2>
        <div class="table-container">
          <p class="text-muted-foreground text-sm font-semibold px-4 py-3">
            This project doesn't have documents yet...
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
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
