import React, { Fragment, useState, useContext } from 'react'
import { Grid, Button, DialogActions, List, ListItem, Snackbar } from '@material-ui/core'
import UploadDialog from '../common/upload/UploadDialog'
import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE } from './constants'
import { makeStyles } from '@material-ui/styles'
import useFiles from '../hooks/useFiles'
import Carousel from '../common/carousel/Carousel'
import { AppContext } from '../../App'

const useStyles = makeStyles(theme => ({
    button2008: {
        backgroundImage: 'url(2008.jpg)',
        backgroundSize: '100% 100%',
        width: 400,
        height: 250,
        margin: '10px',
        fontSize: 20
    },
    button2009: {
        backgroundImage: 'url(2009.jpg)',
        backgroundSize: '100% 100%',
        width: 400,
        height: 250,
        margin: '10px',
        fontSize: 20
    },
    button2010: {
        backgroundImage: 'url(2010.jpg)',
        backgroundSize: '100% 100%',
        width: 400,
        height: 250,
        margin: '10px',
        fontSize: 20
    },
    button2011: {
        backgroundImage: 'url(2011.jpg)',
        backgroundSize: '100% 100%',
        width: 400,
        height: 250,
        margin: '10px',
        fontSize: 20
    },
    button2012: {
        backgroundImage: 'url(2012.jpg)',
        backgroundSize: '100% 100%',
        width: 400,
        height: 250,
        margin: '10px',
        fontSize: 20
    },
    button2013: {
        backgroundImage: 'url(2013.jpg)',
        backgroundSize: '100% 100%',
        width: 400,
        height: 250,
        margin: '10px',
        fontSize: 20
    },
    button2014: {
        backgroundImage: 'url(2014.jpg)',
        backgroundSize: '100% 100%',
        width: 400,
        height: 250,
        margin: '10px',
        fontSize: 20
    },
    button2015: {
        backgroundImage: 'url(2015.jpg)',
        backgroundSize: '100% 100%',
        width: 400,
        height: 250,
        margin: '10px',
        fontSize: 20
    },
    button2016: {
        backgroundImage: 'url(2016.jpg)',
        backgroundSize: '100% 100%',
        width: 400,
        height: 250,
        margin: '10px',
        fontSize: 20
    },

    button2017: {
        backgroundImage: 'url(2017.jpg)',
        backgroundSize: '100% 100%',
        width: 400,
        height: 250,
        margin: '10px',
        fontSize: 20
    },
    button2018: {
        backgroundImage: 'url(2018.jpg)',
        backgroundSize: '100% 100%',
        width: 400,
        height: 250,
        margin: '10px',
        fontSize: 20
    },
    button2019: {
        backgroundImage: 'url(2019.jpg)',
        backgroundSize: '100% 100%',
        width: 400,
        height: 250,
        margin: '10px',
        fontSize: 20
    },
    list: {
        margin: '50px auto'
    },
    root: {
        backgroundColor: 'black',
        height: '100%'
    },
    addButton: {
        position: 'absolute',
        top: 14
    },
    dialogButton: {
        margin: '5%'
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
    const {user} = useContext(AppContext)

    const filterPictures = pictureData ? pictureData.filter(item => item.year === currentValue) : []
    let fileIds = filterPictures.length ? filterPictures.map(item => item.media_id) : []

    const onClick = (year) => {
        setOpenCarousel(true)
        setCurrentValue(year)
        fileIds = []
    }

        
    return (
        <Fragment>
            <Grid className={classes.root} container spacing={0}>
                <List className={classes.list}>
                <ListItem>
                        <Grid item xs={4}>
                            <Button variant="outlined" color="secondary" className={classes.button2008} onClick={() => onClick('2008')}>2008</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" color="secondary" className={classes.button2009} onClick={() => onClick('2009')}>2009</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" color="secondary" className={classes.button2010} onClick={() => onClick('2010')}>2010</Button>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid item xs={4}>
                            <Button variant="outlined" color="secondary" className={classes.button2011} onClick={() => onClick('2011')}>2011</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" color="secondary" className={classes.button2012} onClick={() => onClick('2012')}>2012</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" color="secondary" className={classes.button2013} onClick={() => onClick('2013')}>2013</Button>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid item xs={4}>
                            <Button variant="outlined" color="secondary" className={classes.button2014} onClick={() => onClick('2014')}>2014</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" color="secondary" className={classes.button2015} onClick={() => onClick('2015')}>2015</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" color="secondary" className={classes.button2016} onClick={() => onClick('2016')}>2016</Button>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid item xs={4}>
                            <Button variant="outlined" color="secondary" className={classes.button2017} onClick={() => onClick('2017')}>2017</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" color="secondary" className={classes.button2018} onClick={() => onClick('2018')}>2018</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" color="secondary" className={classes.button2019} onClick={() => onClick('2019')}>2019</Button>
                        </Grid>
                    </ListItem>
                </List>
                {user.data &&
                    <Grid item xs={12}>
                        <DialogActions className={classes.dialogButton}>
                            <Button variant="outlined" className={classes.addButton} color="secondary" onClick={() => setOpenUploadDialog(true)}>Add Picture</Button>
                        </DialogActions>
                        <UploadDialog setFileId={setPictureFile} createMedia={createPictures} fileID={pictureFile} open={openUploadDialog} close={() => setOpenUploadDialog(false)} isVideo={false} allowedFileTypes={ACCEPTED_FILE_TYPES} maxFileSize={MAX_FILE_SIZE} label="Upload Pictures" onChange={id => setPictureFile(id)} onError={error => setError(error)} />
                    </Grid>
                }
            </Grid>
            <Carousel open={openCarousel} onClose={() => setOpenCarousel(false)} fileIds={openCarousel ? fileIds : []}/>
            <Snackbar 
                open={!!error}
                autoHideDuration={6000}
                onClose={() => setError('')}
                message={error}
            />
        </Fragment>
    )
}

export default Pictures