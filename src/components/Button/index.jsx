import React from 'react'
import {Button } from '@mui/material'

const ButtonC = ({title}) => {
  return (
    <Button type='submit' sx={{backgroundColor:'primary.main', color:'white',fontFamily:'inherit', textTransform:'none', padding:'16px 35px', borderRadius:'12px',fontWeight:600, '&:hover':{backgroundColor:'secondary.main'}}}>{title}</Button>
    )
}

export default ButtonC