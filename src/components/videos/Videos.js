import React, { useState, Fragment } from 'react'
import { Typography, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import UploadDialog from '../common/upload/UploadDialog'
import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE } from './constants'
import useFiles from '../hooks/useFiles'
import VideoDialog from './VideoDialog'

const useStyles = makeStyles(theme => ({

}))

function Videos() {
    const classes = useStyles()
    const [openDialog, setOpenDialog] = useState(false)
    const [videoId, setVideoId] = useState('')
    const {createVideos, videoData} = useFiles()
    const [openVideoDialog, setOpenVideoDialog] = useState(false)
    const [dataForUrl, setDataForUrl] = useState([])

    function handleViewVideo(title) {
        setOpenVideoDialog(true)
        const currentArray = videoData ? videoData.filter(item => item.title === title) : []
        setDataForUrl(currentArray)
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
                <Grid item xs={6}>
                    <Button onClick={() => handleViewVideo('First Year of Arthur')}>First Year of Arthur</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={() => handleViewVideo('First Year of Lachlan')}>First Year of Lachlan</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={() => handleViewVideo('2016')}>2016</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={() => handleViewVideo('2017')}>2017</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={() => handleViewVideo('2018')}>2018</Button>
                </Grid>
            </Grid>
            <VideoDialog open={openVideoDialog} close={() => setOpenVideoDialog(false)} data={dataForUrl}/>
            <UploadDialog open={openDialog} close={() => setOpenDialog(false)} allowedFileTypes={ACCEPTED_FILE_TYPES} isVideo maxFileSize={MAX_FILE_SIZE} label="Videos" onChange={id => setVideoId(id)} fileID={videoId} createMedia={createVideos} setFileId={setVideoId} />
        </Fragment>
    )

}

export default Videos