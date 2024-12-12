import React from 'react'

function ErrorResult({error}) {
  return (
    <div className='flex items-center justify-center text-red-200'>
      Sorry, an error occurred {error}
    </div>
  )
}

export default ErrorResult