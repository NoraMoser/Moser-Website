import React from 'react'
import { Dialog, Grid, Typography, DialogContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    quoteContainer: {
        border: '1px black solid',
        width: 'auto',
        height: 100
    }
}))

function ViewQuotesDialog({open, close, data}) {
    const classes = useStyles()
    
        return (
        <Dialog open={open} onClose={close}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DialogContent>
                        <Typography variant="h5">By: {data.author}</Typography>
                        <Typography>Age: {data.age}</Typography>
                        <Typography className={classes.quoteContainer}>{data.quote}</Typography>
                    </DialogContent>
                </Grid>
            </Grid>
        </Dialog>
        )

}

export default ViewQuotesDialog