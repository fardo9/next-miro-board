'use client'

import { useRouter } from 'next/navigation'
import qs from 'query-string'
import { ChangeEvent, useEffect, useState } from 'react'
import { useDebounceValue } from 'usehooks-ts'

export const useSearch = () => {
  const router = useRouter()
  const [value, setValue] = useState('')
  const debouncedValue = useDebounceValue(value, 1000)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: '/',
        query: {
          search: debouncedValue[0],
        },
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    )

    router.push(url)
  }, [debouncedValue, router])

  return { value, handleChange }
}
