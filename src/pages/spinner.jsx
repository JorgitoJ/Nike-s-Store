import React from 'react'

export const Spinner = () => {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-gray-900 bg-opacity-50">
       <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black"></div>
    </div>
  )
}
