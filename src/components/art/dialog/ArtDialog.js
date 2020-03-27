import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, TextField, Grid, Select, MenuItem, InputLabel, DialogActions, Button } from '@material-ui/core'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import Uploader from '../../common/upload/Uploader'
import MomentUtils from '@date-io/moment'

export default function ArtDialog({open, close, maxFileSize, allowedFileTypes, onChange, label, fileId, createMedia, setFileId}) {
    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [initialFileDate, setInitialFileDate] = useState(null)
    const artObject = {
        title: title,
        date_created: initialFileDate,
        age: age,
        name: name,
        media_id: fileId
    }

    function onClickCreate() {
        createMedia(artObject)
        setInitialFileDate(null)
        setTitle('')
        setFileId('')
        close()
    }

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <Dialog open={open}>
            <DialogTitle>Upload Artwork</DialogTitle>
            <DialogContent>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField label="Title of the Artwork" value={title} onChange={e => setTitle(e.target.value)} required InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel>Who was the artist?</InputLabel>
                        <Select value={name} onChange={e => setName(e.target.value)}>
                            <MenuItem value={'Arthur'}>Arthur</MenuItem>
                            <MenuItem value={'Lachlan'}>Lachlan</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="How old was he?" value={age} onChange={e => setAge(e.target.value)} required InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={12}>
                        <DatePicker label='Date artwork created' value={initialFileDate} onChange={setInitialFileDate} format="YYYY-MM-DD" maxDate={new Date()}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Uploader isVideo={false} maxFileSize={maxFileSize} allowedFileTypes={allowedFileTypes} onChange={onChange} label={label} />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' onClick={onClickCreate}>Create</Button>
                <Button variant='contained' onClick={close}>Cancel</Button>
            </DialogActions>
        </Dialog>
        </MuiPickersUtilsProvider>
        
    )
}