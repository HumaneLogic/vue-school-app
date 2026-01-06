import { supabase } from '@/lib/supabaseClient'
import type { LoginForm, RegisterForm } from '@/types/AuthForm'

const authStore = useAuthStore()

export const register = async (formData: RegisterForm) => {
  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
  })

  if (error) return console.log('signUp err:', error)

  if (data.user) {
    const { error } = await supabase.from('profiles').insert({
      id: data.user.id,
      username: formData.userName,
      full_name: formData.firstName.concat('', formData.lastName),
    })

    if (error) return console.log('profiles err:', error)
  }

  authStore.setAuth(data.session)

  return true
}

export const login = async (formData: LoginForm) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  })
  if (error) return console.log('login err:', error)

  authStore.setAuth(data.session)

  return true
}
