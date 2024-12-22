import { Box, Drawer, List, ListItem, ListItemButton, Toolbar } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../../../Context/Context'

const Dashboard = () => {
  const { openDashboard } = useContext(Context);

  return (
    <Drawer
      open={openDashboard}
      variant='persistent'
      sx={{
        width: 250,
        flexShrink: 0,
        height: "100%",
        [`& .MuiDrawer-paper`]: { width: 250, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem>
            <ListItemButton>
              post
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}

export default Dashboard
