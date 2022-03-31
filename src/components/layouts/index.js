import React from 'react'

const Layout = ({Children}) => {
  return (
    <div>
      <div>sidebar</div>
      <div>
        {Children}
      </div>
    </div>
  )
}

export default Layout