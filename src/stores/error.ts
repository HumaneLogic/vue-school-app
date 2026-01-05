import type { CustomError, ExtendedPostgrestError } from '@/types/Error'
import type { PostgrestError } from '@supabase/supabase-js'

// a function for setting the error state from anywhere in the application
export const useErrorStore = defineStore('error-store', () => {
  const activeError = ref<null | CustomError | ExtendedPostgrestError>(null)
  const isCustomError = ref(false)

  const setError = ({
    error,
    customCode,
  }: {
    error: string | PostgrestError | Error
    customCode?: number
  }) => {
    if (typeof error === 'string') {
      isCustomError.value = true
      const customError = new Error(error) as CustomError
      customError.customCode = customCode || 500
      activeError.value = customError
      return
    }

    if (error instanceof Error) {
      // Check if it's a PostgrestError by looking for specific properties
      if ('code' in error && 'details' in error && 'message' in error && 'hint' in error) {
        const extendedError = error as ExtendedPostgrestError
        extendedError.statusCode = customCode || 500
        activeError.value = extendedError
      } else {
        const customError = error as CustomError
        customError.customCode = customCode || 500
        activeError.value = customError
      }
      return
    }
  }

  const clearError = () => {
    activeError.value = null
    isCustomError.value = false
  }

  return {
    activeError,
    setError,
    isCustomError,
    clearError,
  }
})
