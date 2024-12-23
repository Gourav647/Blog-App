import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, Toolbar } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../../../Context/Context'
import { Add, Pages } from '@mui/icons-material';

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
            <Button variant='contained' color='primary' startIcon={<Add/>} sx={{borderRadius: 15,padding: 2}}>
              New post 
            </Button>
          </ListItem>
          <Divider sx={{margin: "15px 0"}}/>
          {[{text: "post", icon: <Pages/>}].map((item, index) => {
            return (
              <ListItem key={index}>
                <ListItemButton>
                  {item.icon}
                  {item.text}
                </ListItemButton>
              </ListItem>
            )
          }
          )}
        </List>
      </Box>
    </Drawer>
  )
}

export default Dashboard
