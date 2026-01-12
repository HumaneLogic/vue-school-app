import { type Projects, projectsQuery } from '@/utils/supaQueries'
import { useMemoize } from '@vueuse/core'

export const useProjectsStore = defineStore('projects-store', () => {
  const projects = ref<Projects | null>(null)

  // query database and cache it reactively
  const loadProjects = useMemoize(async (key: string) => await projectsQuery)

  // query database and compare with cache: if cache is old, show it but use new data on the next navigation to the projects page
  const validateCache = () => {
    if (projects.value?.length) {
      projectsQuery.then(({ data }) => {
        // projects.value is the cached data
        if (JSON.stringify(projects.value) === JSON.stringify(data)) {
          console.log('The cached data and the data from database query, match completely')
          return
        } else {
          console.log('There is new data from database')
          loadProjects.delete('projects')
        }
      })
    }
  }

  const getProjects = async () => {
    const { data, error, status } = await loadProjects('projects')

    if (error) useErrorStore().setError({ error, customCode: status })

    projects.value = data

    validateCache()
  }

  return {
    projects,
    getProjects,
  }
})
