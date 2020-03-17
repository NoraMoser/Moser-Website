import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, TextField, Grid, DialogActions, Button } from '@material-ui/core'
import useLogin from '../../hooks/useLogin'

function Register({open, close}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {register} = useLogin()
    const registerObject = {
        firstName,
        lastName, 
        username,
        email,
        password
    }
    //un: nmoser
    //pw: Abcdefg!hi1

    function onClickRegister() {
        register(registerObject)
        close()
    }

    return (
        <Dialog open={open} onClose={close}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DialogTitle>Register</DialogTitle>
                </Grid>
            <DialogContent>
                <Grid item xs={12}>
                    <TextField label="First Name" InputLabelProps={{shrink: true}} onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Last Name" InputLabelProps={{shrink: true}} onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Username" InputLabelProps={{shrink: true}} onChange={(e) => setUsername(e.target.value)} value={username} />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Email" InputLabelProps={{shrink: true}} onChange={(e) => setEmail(e.target.value)} value={email} />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Password" InputLabelProps={{shrink: true}} onChange={(e) => setPassword(e.target.value)} value={password} />
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClickRegister}>Register</Button>
                <Button onClick={close}>Cancel</Button>
            </DialogActions>
            </Grid>
        </Dialog>
    )
}

export default Register