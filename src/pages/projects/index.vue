<script setup lang="ts">
import { columns } from '@/utils/tableColumns/projectsColumns'

usePageStore().pageData.title = 'Projects'

const projectsLoader = useProjectsStore()

const { projects } = storeToRefs(projectsLoader)
const { getProjects } = projectsLoader

// we wait for projects to be fetched from db then we render the page
await getProjects()

const { getGroupedCollabs, groupedCollabs } = useCollabs()

// this is an async function,so it doesn't block main thread, it initializes db query and hands back the control to main thread so it runs other functions or do other things
// if we use await here, first we query db then only when all the requests are resolved, we render the page
// if we remove await, we render the page and query db for collabs at the same time and when query is resolved,we show it
getGroupedCollabs(projects.value)

const columnsWithCollabs = columns(groupedCollabs)
</script>

<!-- we don't wait for collabs to be fetched from db to render -->
<template>
  <DataTable v-if="projects" :columns="columnsWithCollabs" :data="projects" />
</template>
