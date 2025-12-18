<script setup lang="ts">
import { projectQuery, type Project } from '@/utils/supaQueries'

const route = useRoute('/projects/[slug]')
const project = ref<Project | null>(null)

const getProjects = async () => {
  const { data, error } = await projectQuery(route.params.slug)
  if (error) console.log(error)
  project.value = data
}
await getProjects()
</script>
<!--
<template>
  <div>
    <h1>Project {{ route.params?.slug }}</h1>
    <RouterLink to="/">Home</RouterLink>
  </div>
</template> -->

<template>
  <div>
    <Table>
      <TableRow>
        <TableHead> Name </TableHead>
        <TableCell>
          <AppInPlaceEditText />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHead> Description </TableHead>
        <TableCell>
          <AppInPlaceEditTextarea />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHead> Status </TableHead>
        <TableCell>
          <AppInPlaceEditStatus />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHead> Collaborators </TableHead>
        <TableCell>
          <div class="flex">
            <Avatar class="-mr-4 border border-primary hover:scale-110 transition-transform">
            </Avatar>
          </div>
        </TableCell>
      </TableRow>
    </Table>

    <section class="mt-10 flex flex-col md:flex-row gap-5 justify-between grow">
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
              <TableRow>
                <TableCell class="p-0"> </TableCell>
                <TableCell>
                  <AppInPlaceEditStatus />
                </TableCell>
                <TableCell> Lorem ipsum dolor sit amet. </TableCell>
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead> Name </TableHead>
                <TableHead> Visibility </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell> Lorem ipsum dolor sit amet. </TableCell>
                <TableCell> Private </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
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
