import type { CustomError, ExtendedPostgrestError } from "@/types/Error"
import type { PostgrestError } from "@supabase/supabase-js"

 export const useErrorStore = defineStore('error-store', () => {
    const activeError = ref<null | CustomError | ExtendedPostgrestError>(null)

    const setError = ({ error, customCode }: { error: string | PostgrestError | Error, customCode?: number }) => {
      // if the error is not a Postgrest Error
      if (typeof error === 'string' || error instanceof Error) {
        // if error was a js error , we don't need to construct an error and we just pass the error
        activeError.value = typeof error === 'string' ? Error(error) : error
        // 500 will be used for js errors
        activeError.value.customCode = customCode || 500
        return
      }
      activeError.value = error
      activeError.value.statusCode = customCode || 500

    }
    return {
      activeError,
      setError
    }
 })
