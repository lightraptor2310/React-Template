import React from 'react'
import {Button} from '@mui/material'
import { Link } from 'react-router-dom'

const BackToHome = () => {
  return (
    <Button variant="outlined" color="primary">
            <Link to={`/`} > Back to home </Link>
    </Button>
  )
}

export default BackToHome