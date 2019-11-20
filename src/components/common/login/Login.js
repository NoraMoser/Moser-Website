import React, { useState } from 'react'
import {Dialog, DialogActions, Button, IconButton, TextField, DialogContent} from '@material-ui/core'
import {Close} from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    closeButton: {
        marginLeft: 320
    }
}))

function Login({open, close}) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const classes = useStyles()

    return (
        <Dialog open={open} onClose={close}>
            <IconButton className={classes.closeButton} onClick={close}>
                <Close />
            </IconButton>
            <DialogContent>
                <TextField label="user name" onChange={e => setUserName(e.target.value)} value={userName} fullWidth/>
                <TextField label="password" onChange={e => setPassword(e.target.value)} value={password} fullWidth/>
            </DialogContent>
            <DialogActions>
                <Button>Sign In</Button>
                <Button onClick={close}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Login 