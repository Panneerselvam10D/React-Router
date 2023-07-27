import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

import Typography from '@mui/material/Typography';

const CareersList = ({Title, Location}) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem alignItems="flex-start">
      <ListItemText
        primary= {Title}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {Location}
            </Typography>
            
          </React.Fragment>
        }
      />
    </ListItem>
    <Divider component="li" />
    </List>
  )
}

export default CareersList