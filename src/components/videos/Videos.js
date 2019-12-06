import React, { useState, Fragment } from 'react'
import { Typography, Button, Grid, DialogActions, CardActions } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import UploadDialog from '../common/upload/UploadDialog'
import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE } from './constants'
import useFiles from '../hooks/useFiles'
import VideoDialog from './VideoDialog'

const useStyles = makeStyles(theme => ({
    container: {
        backgroundImage: 'url(twobabies.jpg)',
        height: 'calc(100vh - 20px)',
        backgroundSize: 'contain' ,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'black'
    },
    arthurButton: {
        height: '70px',
        width: '250px',
        padding: '15px',
        position: 'absolute',
        top: 150,
        marginLeft: '5%'
    },
    lachlanButton: {
        height: '70px',
        width: '250px',
        padding: '15px',
        position: 'absolute',
        top: 150,
        marginLeft: '5%'
    },
    addButton: {
        position: 'absolute',
        top: 14
    },
    dialogButton: {
        margin: '5%'
    },
    otherRightButtons: {
        marginLeft: '50%'
    },
    otherLeftButtons: {
        marginRight: '50%'
    }

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
            <Grid className={classes.container} container spacing={2}>
                <Grid item xs={12}>
                    <DialogActions className={classes.dialogButton}>
                        <Button className={classes.addButton} color='secondary' variant='outlined' onClick={() => setOpenDialog(true)}>Add Videos</Button>
                    </DialogActions>
                </Grid>
                <Grid item xs={6}>
                    <CardActions>
                        <Button className={classes.arthurButton} color='secondary' variant='outlined'  onClick={() => handleViewVideo('First Year of Arthur')}>First Year of Arthur</Button>
                    </CardActions>
                </Grid>
                <Grid item xs={6}>
                    {/* <DialogActions > */}
                        <Button className={classes.lachlanButton} color='secondary' variant='outlined'  onClick={() => handleViewVideo('First Year of Lachlan')}>First Year of Lachlan</Button>
                    {/* </DialogActions> */}
                </Grid>
                <Grid item xs={6}>
                    <Button className={classes.otherLeftButtons} color='secondary' variant='outlined'  onClick={() => handleViewVideo('2016')}>2016</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button className={classes.otherRightButtons} color='secondary' variant='outlined'  onClick={() => handleViewVideo('2017')}>2017</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button className={classes.otherLeftButtons} color='secondary' variant='outlined'  onClick={() => handleViewVideo('2018')}>2018</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button className={classes.otherRightButtons} color='primary' variant='outlined' >2019</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button className={classes.otherLeftButtons} color='primary' variant='outlined' >2020</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button className={classes.otherRightButtons} color='primary' variant='outlined' >2021</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button className={classes.otherLeftButtons} color='primary' variant='outlined' >2022</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button className={classes.otherRightButtons} color='primary' variant='outlined' >2023</Button>
                </Grid>
            </Grid>
            <VideoDialog open={openVideoDialog} close={() => setOpenVideoDialog(false)} data={dataForUrl}/>
            <UploadDialog open={openDialog} close={() => setOpenDialog(false)} allowedFileTypes={ACCEPTED_FILE_TYPES} isVideo maxFileSize={MAX_FILE_SIZE} label="Videos" onChange={id => setVideoId(id)} fileID={videoId} createMedia={createVideos} setFileId={setVideoId} />
        </Fragment>
    )

}

export default Videos