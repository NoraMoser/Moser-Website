import React, { Fragment, useState } from 'react'
import { Typography, Box, Grid, Button } from '@material-ui/core'
import UploadDialog from '../common/upload/UploadDialog'
import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE } from './constants'

function Pictures() {
    const [openUploadDialog, setOpenUploadDialog] = useState(false)
    const [pictureFile, setPictureFile] = useState([])
    const [error, setError] = useState('')
    const [uploaded, setUploaded] = useState(false)
    console.log(pictureFile)
    console.log(error)
    console.log(uploaded)

    const selectionGridByYear = (title) => {
        return (
        <Box>
            <Button>{title}</Button>
        </Box>
        )
    }
        
    return (
        <Fragment>
            <Typography variant="h2">Pictures</Typography>
            <Button onClick={() => setOpenUploadDialog(true)}>Add Picture</Button>
            <UploadDialog fileID={pictureFile} open={openUploadDialog} close={() => setOpenUploadDialog(false)} isVideo={false} allowedFileTypes={ACCEPTED_FILE_TYPES} maxFileSize={MAX_FILE_SIZE} label="Upload Pictures" onChange={id => setPictureFile(id)} onError={error => setError(error)} haveUploaded={uploaded => setUploaded(uploaded)} />
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    {selectionGridByYear(2011)}
                </Grid>
                <Grid item xs={3}>
                    {selectionGridByYear(2012)}
                </Grid>
                <Grid item xs={3}>
                    {selectionGridByYear(2013)}
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Pictures