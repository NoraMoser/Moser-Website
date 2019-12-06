import React, { useState } from 'react'
import {Dialog, DialogActions, Button, IconButton, TextField, DialogContent, Typography, Grid} from '@material-ui/core'
import {Close} from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import Register from '../register/Register'
import useLogin from '../../hooks/useLogin'

const useStyles = makeStyles(theme => ({
    closeButton: {
        marginLeft: 320
    }
}))

function Login({open, close}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const classes = useStyles()
    const [openRegisterDialog, setOpenRegisterDialog] = useState(false)
    const {signIn} = useLogin()
    const signInObject = {
        user: username,
        password
    }

    function onClickSignIn() {
        signIn(signInObject)
        close()
    }

    return (
        <Dialog open={open} onClose={close}>
            <IconButton className={classes.closeButton} onClick={close}>
                <Close />
            </IconButton>
            <DialogContent>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField label="user name" onChange={e => setUsername(e.target.value)} value={username} fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="password" onChange={e => setPassword(e.target.value)} value={password} fullWidth/>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography>New user?</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={() => setOpenRegisterDialog(true)}>Register</Button>
                        <Register open={openRegisterDialog} close={() => setOpenRegisterDialog(false)}/>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClickSignIn}>Sign In</Button>
                <Button onClick={close}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Login 