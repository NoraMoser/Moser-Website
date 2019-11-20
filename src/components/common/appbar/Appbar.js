import React, { useState } from 'react'
import {AppBar, Toolbar, Typography, Button, IconButton, makeStyles} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Login from '../login/Login';

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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar color="primary">
          <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="menu">
            <MenuIcon />
          </IconButton>
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