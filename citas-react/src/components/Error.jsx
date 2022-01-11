import React from 'react'

const Error = ({ children }) => {
  return (
    <div className='bg-red-800 text-white text-center uppercase mb-3 p-3 rounded-md'>
      {children}
    </div>
  )
}

export default Error;
