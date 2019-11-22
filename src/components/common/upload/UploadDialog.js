import React, { useState } from 'react'
import { Dialog, TextField, DialogContent, DialogActions, Button, Grid, DialogTitle } from '@material-ui/core'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFunctions from '@date-io/moment'
import Uploader from './Uploader'
import useFiles from '../../hooks/useFiles'

function UploadDialog({open, close, isVideo, allowedFileTypes, maxFileSize, label, onChange, fileID}) {
    const [initialFileDate, setInitialFileDate] = useState(null)
    const [endFileDate, setEndFileDate] = useState(null)
    const [fileTitle, setFileTitle] = useState('')
    const [formData, setFormData] = useState()
    console.log(formData)
    const {uploadFiles, createPictures} = useFiles() 
    const year = initialFileDate ? new Date(initialFileDate).getFullYear() : null
    console.log(year)
    const object = {
        year,
        date_begin: initialFileDate,
        date_end: endFileDate
    }

    return (
    <MuiPickersUtilsProvider utils={DateFunctions}>
        <Dialog open={open} onClose={close}>
            <DialogContent>
                <DialogTitle>Upload {isVideo ? 'Video' : 'Picture'}</DialogTitle>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <DatePicker label={`Date ${isVideo ? 'video' : 'picture'} ${isVideo ? 'started' : 'created'}`} value={initialFileDate} onChange={setInitialFileDate} format="YYYY-MM-DD" maxDate={new Date()}/>
                    </Grid>
                    {isVideo && 
                    <Grid item xs={12}>
                        <DatePicker label="Date this video was completed" value={endFileDate} onChange={setEndFileDate} format="YYYY-MM-DD" maxDate={new Date()}/>
                    </Grid>}
                    <Grid item xs={12}>
                        <TextField label={`Title of this ${isVideo ? 'video' : 'picture'}`} value={fileTitle} onChange={e => setFileTitle(e.target.value)} required InputLabelProps={{ shrink: true }}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Uploader maxFileSize={maxFileSize} allowedFileTypes={allowedFileTypes} onChange={onChange} label={label} haveFormData={data => setFormData(data)} />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => createPictures(fileTitle, initialFileDate, fileID)}>Create</Button>
                <Button onClick={close}>Cancel</Button>
            </DialogActions>
        </Dialog>
    </MuiPickersUtilsProvider>
    )
}

export default UploadDialog