import { Menu } from '@mui/icons-material'
import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <AppBar color='secondary' position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Stack flexDirection={"row"} justifyContent={"space-between"} width={"100%"} alignItems={"center"}>
        <Typography fontSize={25}>
            Blog
        </Typography>
        <Stack>
            
        </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
