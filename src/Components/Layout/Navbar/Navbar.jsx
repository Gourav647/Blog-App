import { DarkMode, LightMode, Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Avatar, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Context } from '../../../Context/Context';

const Navbar = () => {
  const { openDashboard, setOpenDashboard, dark, setDark } = useContext(Context);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  }

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <AppBar color='secondary' position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Stack flexDirection={"row"} justifyContent={"space-between"} width={"100%"} alignItems={"center"}>
          <Stack flexDirection={"row"} justifyContent={"space-between"} gap={1.5} alignItems={"center"}>
            <IconButton onClick={() => { setOpenDashboard(!openDashboard) }}>
              <MenuIcon />
            </IconButton>
            <Typography fontSize={25}>
              Blog
            </Typography>
          </Stack>
          <Stack flexDirection={"row"} justifyContent={"space-between"} gap={1.5} alignItems={"center"}>
            <Tooltip title="Change mode">
              <IconButton onClick={() => setDark(!dark)}>
                {dark ? <LightMode /> : <DarkMode />}
              </IconButton>
            </Tooltip>
            <Tooltip title="Profile">
              <IconButton onClick={handleOpen}>
                <Avatar sx={{ width: 35, height: 35 }} />
              </IconButton>
            </Tooltip>
            <Menu
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem>
                <Avatar /> profile
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
