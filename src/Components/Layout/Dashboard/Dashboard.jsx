import { Box, Button, Divider, Drawer, Fade, Grow, List, ListItem, ListItemButton, Toolbar, Tooltip } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../../../Context/Context'
import { Add, Pages } from '@mui/icons-material';
import { Save, Settings } from '@mui/icons-material';


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
            <Tooltip title="Create a new post" placement="bottom" slots={{ transition: Grow }} slotProps={{ transition: { timeout: 250 } }}>
              <Button variant='contained' color='secondary' startIcon={<Add />} sx={{ borderRadius: 15, padding: "10px 15px" }}>
                New post
              </Button>
            </Tooltip>
          </ListItem>
          <Divider sx={{ margin: "20px 0", backgroundColor: "gray" }} variant='middle' />
          {[{ text: "post", icon: <Pages /> },
          { text: "save", icon: <Save /> },
          { text: "settings", icon: <Settings /> },
          ].map((item, index) => {
            return (
              <ListItem key={index}>
                <ListItemButton>
                  {item.icon}
                  <Box sx={{ marginLeft: 1, fontSize: 17, textTransform: 'capitalize' }}>{item.text}</Box>
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Box>
    </Drawer>
  )
}

export default Dashboard
