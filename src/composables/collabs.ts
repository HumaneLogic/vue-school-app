import { groupedProfileQuery } from '@/utils/supaQueries'

export const useCollabs = () => {
  const getProfilesByIds = async (userIds: string[]) => {
    const { data, error } = await groupedProfileQuery(userIds)
    if (error || !data) return []
    return data
  }
  return {
    getProfilesByIds,
  }
}
