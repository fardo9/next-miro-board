import Image from 'next/image'
import React from 'react'

const GlobalLoading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        src="/logo.svg"
        alt="Loading..."
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  )
}

export default GlobalLoading
