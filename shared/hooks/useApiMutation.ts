'use client'

import { useState } from 'react'
import { useMutation } from 'convex/react'

export const useApiMutation = (mutationFn: any) => {
  const [pending, setPending] = useState<boolean>(false)
  const apiMutation = useMutation(mutationFn)

  const mutate = async (payload: any) => {
    setPending(true)
    return await apiMutation(payload)
      .finally(() => setPending(false))
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        throw new Error(error.message)
      })
  }

  return { mutate, pending }
}
