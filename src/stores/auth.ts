import { supabase } from '@/lib/supabaseClient'
import { profileQuery } from '@/utils/supaQueries'
import type { Session, User } from '@supabase/supabase-js'
import type { Tables } from 'database/types'

export const useAuthStore = defineStore('auth-store', () => {
  const user = ref<null | User>(null)
  const profile = ref<null | Tables<'profiles'>>(null)

  const setProfile = async () => {
    if (!user.value) {
      profile.value = null
      return
    }

    // only fetch the profile if we don't have profile id or it doesn't match the current logged in user id
    if (!profile.value || profile.value.id !== user.value.id) {
      const { data } = await profileQuery(user.value.id)
      profile.value = data || null
    }
  }

  const setAuth = async (userSession: null | Session = null) => {
    if (!userSession) {
      user.value = null
      return
    }
    user.value = userSession.user
    await setProfile()
  }

  const getSession = async () => {
    onMounted(async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session?.user) await setAuth(data.session)
    })
  }

  return {
    user,
    profile,
    setAuth,
    getSession,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
