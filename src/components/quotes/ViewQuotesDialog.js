import React from 'react'
import { Dialog, Grid, Typography, DialogContent, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    quoteContainer: {
        border: '1px black solid',
        width: 'auto',
        height: 100
    }
}))

function ViewQuotesDialog({open, close, data, onClickRandomQuote}) {
    const classes = useStyles()
    console.log(data)
    
        return (
        <Dialog open={open} onClose={close}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DialogContent>
                        <Typography variant="h5">By: {data ? data.author : ''}</Typography>
                        <Typography>Age:{data ? data.age : ''}</Typography>
                        <Typography className={classes.quoteContainer}>{data ? data.quote : ''}</Typography>
                    </DialogContent>
                </Grid>
            </Grid>
            <Grid container spacing={3} justify="flex-end">
                <Grid item xs={'auto'}>
                    <Button onClick={onClickRandomQuote}>Next</Button>
                </Grid>
            </Grid> 
        </Dialog>
        )

}

export default ViewQuotesDialog