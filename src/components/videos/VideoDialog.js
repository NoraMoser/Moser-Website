import React from 'react'
import { Dialog, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    dialog: {
        margin: 'auto'
    }
}))

function VideoDialog({ data, open, close }) {
    const classes = useStyles();
    const dialog = data.map((item, key) => {
        return (
            <Dialog key={key} open={open} onClose={close} className={classes.dialog} maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h5">{item.title}</Typography>
                        <Typography>Date: {new Date(item.date_created).toLocaleDateString()} - {new Date(item.date_ended).toLocaleDateString()}</Typography>
                        <video preload="auto" width="700" height="auto" controls>
                            {/* Update video source URL */}
                            <source src={`https://noral-master.onrender.com/api/media/${item.media_id}`} type="video/mp4" />
                        </video>
                    </Grid>
                </Grid>
            </Dialog>
        )
    })
    return dialog
}

export default VideoDialog
