'use client'

import Modals from '@/shared/components/ui/custom/Modals'
import { useEffect, useState } from 'react'

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  return (
    <div>
      <Modals />
    </div>
  )
}

export default ModalProvider
