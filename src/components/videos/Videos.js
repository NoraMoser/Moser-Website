import React, { useState, Fragment, useContext } from 'react'
import { Typography, Button, Grid, DialogActions, CardActions } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import UploadDialog from '../common/upload/UploadDialog'
import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE } from './constants'
import useFiles from '../hooks/useFiles'
import VideoDialog from './VideoDialog'
import { AppContext } from '../../App'

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: 'black',
        height: '100%'
    },
    arthurButton: {
        backgroundImage: 'url(AFirst.jpg)',
        backgroundSize: '100% 100%',
        margin: '20px',
        height: '300px',
        width: '400px',
        border: '2px solid white',
        fontSize: 20
    },
    lachlanButton: {
        backgroundImage: 'url(LFirst.jpg)',
        backgroundSize: '100% 100%',
        margin: '20px',
        height: '300px',
        width: '400px',
        border: '2px solid white',
        fontSize: 20
    },
    addButton: {
        position: 'absolute',
        top: 14
    },
    dialogButton: {
        margin: '5%'
    },
    otherDialogButton: {
        margin: '49%'
    },
    button2016: {
        backgroundImage: 'url(2016vidbutton.jpg)',
        backgroundSize: '100% 100%',
        margin: '10px',
        width: '200px',
        height: '155px',
        fontSize: 16
    },
    button2017: {
        backgroundImage: 'url(2017vidbutton.jpg)',
        backgroundSize: '100% 100%',
        margin: '10px',
        width: '200px',
        height: '155px',
        fontSize: 16
    },
    button2018: {
        backgroundImage: 'url(2018vidbutton.jpg)',
        backgroundSize: '100% 100%',
        margin: '10px',
        width: '200px',
        height: '155px',
        fontSize: 16
    },
    button2019: {
        backgroundImage: 'url(2019vidbutton.jpg)',
        backgroundSize: '100% 100%',
        margin: '10px',
        width: '200px',
        height: '155px',
        fontSize: 16
    }

}))

function Videos() {
    const classes = useStyles()
    const [openDialog, setOpenDialog] = useState(false)
    const [videoId, setVideoId] = useState('')
    const {createVideos, videoData} = useFiles()
    const [openVideoDialog, setOpenVideoDialog] = useState(false)
    const [dataForUrl, setDataForUrl] = useState([])
    const {user} = useContext(AppContext)

    function handleViewVideo(title) {
        setOpenVideoDialog(true)
        const currentArray = videoData ? videoData.filter(item => item.title === title) : []
        setDataForUrl(currentArray)
    }


    return (
        <Fragment>
            <Grid className={classes.container} container spacing={2}>
                <Grid item xs={6}>
                        <Button className={classes.arthurButton} color='secondary'  onClick={() => handleViewVideo('First Year of Arthur')}>First Year of Arthur</Button>
                </Grid>
                <Grid item xs={6}>
                        <Button className={classes.lachlanButton} color='secondary' onClick={() => handleViewVideo('First Year of Lachlan')}>First Year of Lachlan</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button className={classes.button2016} color='secondary' variant='outlined'  onClick={() => handleViewVideo('2016')}>2016</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button className={classes.button2017} color='secondary' variant='outlined'  onClick={() => handleViewVideo('2017')}>2017</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button className={classes.button2018} color='secondary' variant='outlined'  onClick={() => handleViewVideo('2018')}>2018</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button disabled={true} className={classes.button2019} color='primary' variant='outlined' >2019</Button>
                </Grid>
                {user.data &&
                    <Grid item xs={12}>
                        <DialogActions className={classes.dialogButton}>
                            <Button className={classes.addButton} color='secondary' variant='outlined' onClick={() => setOpenDialog(true)}>Add Videos</Button>
                        </DialogActions>
                    </Grid>
                }
            </Grid>
            <VideoDialog open={openVideoDialog} close={() => setOpenVideoDialog(false)} data={dataForUrl}/>
            <UploadDialog open={openDialog} close={() => setOpenDialog(false)} allowedFileTypes={ACCEPTED_FILE_TYPES} isVideo maxFileSize={MAX_FILE_SIZE} label="Videos" onChange={id => setVideoId(id)} fileID={videoId} createMedia={createVideos} setFileId={setVideoId} />
        </Fragment>
    )

}

export default Videos