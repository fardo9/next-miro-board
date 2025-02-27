import React from 'react'

const EmptyFavorites = () => {
  return (
    <div className="center-flex flex-col h-full">
      <h2 className="text-2xl font-semibold mt-6">
        No favorites found.
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try find something else.
      </p>
    </div>
  )
}

export default EmptyFavorites
