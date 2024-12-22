import { Menu } from '@mui/icons-material'
import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../../../Context/Context'

const Navbar = () => {
  const {openDashboard,setOpenDashboard} = useContext(Context);
  
  return (
    <AppBar color='secondary' position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Stack flexDirection={"row"} justifyContent={"space-between"} width={"100%"} alignItems={"center"}>
          <Stack>
            <IconButton onClick={() => {setOpenDashboard(!openDashboard)}}>
              <Menu/>
            </IconButton>
        <Typography fontSize={25}>
            Blog
        </Typography>
          </Stack>
        <Stack>
            
        </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
