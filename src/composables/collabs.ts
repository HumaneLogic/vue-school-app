import type { GroupedCollabs } from '@/types/GroupedCollabs'
import { groupedProfileQuery, type Projects, type TasksWithProjects } from '@/utils/supaQueries'

export const useCollabs = () => {
  const groupedCollabs = ref<GroupedCollabs>({})

  const getProfilesByIds = async (userIds: string[]) => {
    const { data, error } = await groupedProfileQuery(userIds)
    if (error || !data) return []
    return data
  }

  const getGroupedCollabs = async (items: Projects | TasksWithProjects) => {
    const filteredItems = items.filter((item) => item.collaborators.length)
    // get profiles from projects using collaborator's id - get id from projects or tasks
    const promises = filteredItems.map((item) => getProfilesByIds(item.collaborators))

    // all promises will run in parallel(they will not wait for each other to complete)
    // it will return [ [{...profiles}], [{...profiles}], [{...profiles}], ]
    const results = await Promise.all(promises)

    // this will return
    //  { "projects-id-1": [{profiles...}] ,
    //  "projects-id-2": [{profiles...}] }
    filteredItems.forEach((item, index) => {
      groupedCollabs.value[item.id] = results[index]
    })
  }

  return {
    getProfilesByIds,
    getGroupedCollabs,
    groupedCollabs,
  }
}
