import React from 'react'

const Header = ({ children }) => {
  return (
    <div className="container" style={{ maxWidth: '900px' }}>
            <div className='mt-5 text-center'>
                <h2>JSONPlaceholder</h2>
            </div>
            <div className="mt-5">
                {children}
            </div>
        </div>
  )
}

export default Header