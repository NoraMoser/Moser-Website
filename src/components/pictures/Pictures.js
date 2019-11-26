import React, { Fragment, useState } from 'react'
import { Typography, Box, Grid, Button } from '@material-ui/core'
import UploadDialog from '../common/upload/UploadDialog'
import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE } from './constants'
import { makeStyles } from '@material-ui/styles'
import useFiles from '../hooks/useFiles'
import Carousel from '../common/carousel/Carousel'

const useStyles = makeStyles(theme => ({
    button: {
        width: 300,
        marginTop: 30
    }
}))

function Pictures() {
    const [openUploadDialog, setOpenUploadDialog] = useState(false)
    const [pictureFile, setPictureFile] = useState([])
    const [error, setError] = useState('')
    const classes = useStyles()
    const {createPictures, pictureData} = useFiles() 
    const [openCarousel, setOpenCarousel] = useState(false)
    const [currentValue, setCurrentValue] = useState('')
    console.log(pictureFile)
    console.log(error)
    console.log(pictureData)

    const filterPictures = pictureData ? pictureData.filter(item => item.year === currentValue) : []
    let fileIds = filterPictures.length ? filterPictures.map(item => item.media_id) : []
    console.log('filter', filterPictures)

    const onClick = (year) => {
        setOpenCarousel(true)
        setCurrentValue(year)
        fileIds = []
    }

        
    return (
        <Fragment>
            <Typography variant="h2">Pictures</Typography>
            <Button onClick={() => setOpenUploadDialog(true)}>Add Picture</Button>
            <UploadDialog setFileId={setPictureFile} createMedia={createPictures} fileID={pictureFile} open={openUploadDialog} close={() => setOpenUploadDialog(false)} isVideo={false} allowedFileTypes={ACCEPTED_FILE_TYPES} maxFileSize={MAX_FILE_SIZE} label="Upload Pictures" onChange={id => setPictureFile(id)} onError={error => setError(error)} />
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Button variant="outlined" className={classes.button} onClick={() => onClick('2011')}>2011</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="outlined" className={classes.button} onClick={() => onClick('2012')}>2012</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="outlined" className={classes.button} onClick={() => onClick('2013')}>2013</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="outlined" className={classes.button} onClick={() => onClick('2014')}>2014</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="outlined" className={classes.button} onClick={() => onClick('2015')}>2015</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="outlined" className={classes.button} onClick={() => onClick('2016')}>2016</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="outlined" className={classes.button} onClick={() => onClick('2017')}>2017</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="outlined" className={classes.button} onClick={() => onClick('2018')}>2018</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="outlined" className={classes.button} onClick={() => onClick('2019')}>2019</Button>
                </Grid>
            </Grid>
            <Carousel open={openCarousel} onClose={() => setOpenCarousel(false)} fileIds={openCarousel ? fileIds : []}/>
        </Fragment>
    )
}

export default Pictures