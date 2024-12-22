import { Box, Drawer, List, ListItem, ListItemButton, Toolbar } from '@mui/material'
import React from 'react'

const Dashboard = () => {
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
      <Toolbar/>
      <Box sx={{overflow: "auto"}}>
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
