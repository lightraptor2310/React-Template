import React from 'react'
import { Link } from 'react-router-dom'
const ClickableBlock = ({to, children}) => {
  return (
    <Link to={to}  >
      {children}
    </Link>
  )
}

export default ClickableBlock