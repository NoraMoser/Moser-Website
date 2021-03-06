import React, { useState } from 'react'
import { Dialog, TextField, DialogContent, DialogActions, Button, Grid, DialogTitle } from '@material-ui/core'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import Uploader from './Uploader'
import MomentUtils from '@date-io/moment'

function UploadDialog({open, close, isVideo, allowedFileTypes, maxFileSize, label, onChange, fileID, createMedia, setFileId, title}) {
    const [initialFileDate, setInitialFileDate] = useState(null)
    const [endFileDate, setEndFileDate] = useState(null)
    const [fileTitle, setFileTitle] = useState('')
    const year = initialFileDate ? new Date(initialFileDate).getFullYear() : null
    const createButtonDisabled = !fileID
    const object = {
        title: fileTitle,
        date_created: initialFileDate,
        date_ended: endFileDate ? endFileDate : null,
        year: year,
        media_id: fileID
    }

    function onClickCreate() {
        createMedia(object)
        setInitialFileDate(null)
        setEndFileDate(null)
        setFileTitle('')
        setFileId('')
        close()
    }

    return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
        <Dialog open={open} onClose={close}>
            <DialogContent>
                <DialogTitle>{title}</DialogTitle>
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
                        <Uploader isVideo={isVideo} maxFileSize={maxFileSize} allowedFileTypes={allowedFileTypes} onChange={onChange} label={label} />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button disabled={createButtonDisabled} onClick={onClickCreate}>Create</Button>
                <Button onClick={close}>Cancel</Button>
            </DialogActions>
        </Dialog>
    </MuiPickersUtilsProvider>
    )
}

export default UploadDialog