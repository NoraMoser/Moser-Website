import React, { useState } from 'react'
import { Dialog, TextField, DialogActions, Button, DialogContent, Grid } from '@material-ui/core'
import useFiles from '../hooks/useFiles'

function AddQuotesDialog({open, close}) {
    const [author, setAuthor] = useState('')
    const [age, setAge] = useState('')
    const [quote, setQuote] = useState('')
    const {createQuotes} = useFiles()
    const quoteObject = {
        author,
        age, 
        quote
    }

    function onClickAddQuote() {
        createQuotes(quoteObject)
        close()
    }


    return (
        <Dialog open={open} onClose={close}>
            <DialogContent>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField label="Name" onChange={e => setAuthor(e.target.value)} value={author} InputLabelProps={{ shrink: true }}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Age" onChange={e => setAge(e.target.value.replace(/[^0-9.]/g, ''))} value={age} InputLabelProps={{ shrink: true }}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Quote" onChange={e => setQuote(e.target.value)} value={quote} multiline rows={4} variant="outlined" fullWidth InputLabelProps={{ shrink: true }}/>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClickAddQuote}>Add Quote</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddQuotesDialog