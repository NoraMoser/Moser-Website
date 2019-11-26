import React, { useState, Fragment } from 'react'
import { Typography, Button, Grid, Card, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import UploadDialog from '../common/upload/UploadDialog'
import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE } from './constants'
import useFiles from '../hooks/useFiles'

const useStyles = makeStyles(theme => ({
    container: {
        border: '1px solid black',
        width: 700,
        color: 'white',
        background: 'black'
    }
}))

function Videos() {
    const classes = useStyles()
    const [openDialog, setOpenDialog] = useState(false)
    const [videoId, setVideoId] = useState('')
    const {createVideos, videoData} = useFiles()
    console.log(videoData)
    const selectedVideoId = videoData ? videoData.map(item => item.media_id) : []
    console.log('vid id', videoId)
    console.log(selectedVideoId)

    const createVideo = (item, key) => {
        const url = `http://localhost:8000/api/file/${item.media_id}`
        console.log(url)
       
        return (
            <Fragment key={key}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Container className={classes.container}>
                            <Typography variant="h5">{item.title}</Typography>
                            <Typography>Date: {new Date(item.date_created).toLocaleDateString()} - {new Date(item.date_ended).toLocaleDateString()}</Typography>
                            {url && <video width="620" height="540" controls>
                                <source src={url} type="video/mp4" />
                            </video>}
                        </Container>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }


    return (
        <Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h2">Videos</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={() => setOpenDialog(true)}>Add Videos</Button>
                </Grid>
                <Grid item xs={12}>
                    {videoData ? videoData.map(createVideo) : void 0}
                </Grid>
            </Grid>
            <UploadDialog open={openDialog} close={() => setOpenDialog(false)} allowedFileTypes={ACCEPTED_FILE_TYPES} isVideo maxFileSize={MAX_FILE_SIZE} label="Videos" onChange={id => setVideoId(id)} fileID={videoId} createMedia={createVideos} setFileId={setVideoId} />
        </Fragment>
    )

}

export default Videos