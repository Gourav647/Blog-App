import { Box, Drawer, List, ListItem, ListItemButton, Toolbar } from '@mui/material'
import React from 'react'

const Dashboard = () => {
  return (
    <Drawer
    variant='permanent'
    sx={{
        width: 270,
        flexShrink: 0
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
