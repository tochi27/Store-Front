import React from 'react'

const Header = ({pageTitle}) => {
  return (
    <header className='h-20 z-10 flex items-center justify-center shadow-sm bg-white'>
        <h1 className='text-3xl font-bold'>{pageTitle}</h1>
    </header>
  )
}

export default Header