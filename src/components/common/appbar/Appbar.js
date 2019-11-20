import React, { useState } from 'react'
import {AppBar, Toolbar, Typography, Button, IconButton, makeStyles} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Login from '../login/Login';
import Dropdown from '../dropdown/Dropdown';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 20,
  },
  title: {
    flexGrow: 1,
  },
}));

function Appbar() {
  const classes = useStyles()
  const [openDialog, setOpenDialog] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar color="primary">
          <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="menu" onClick={e => setAnchorEl(e.currentTarget)}> 
            <MenuIcon />
          </IconButton>
          <Dropdown open={!!anchorEl} anchorEl={anchorEl} close={() => setAnchorEl(null)}/>
          <Typography variant="h6" className={classes.title}>
            Moser Family
          </Typography>
          <Button color="secondary" onClick={() => setOpenDialog(true)}>Login</Button>
          <Login open={openDialog} close={() => setOpenDialog(false)}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Appbar