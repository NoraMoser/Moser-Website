import React, { Fragment, useState, useContext } from 'react'
import { Grid, Button, DialogActions, List, ListItem, Snackbar } from '@material-ui/core'
import UploadDialog from '../common/upload/UploadDialog'
import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE } from './constants'
import useFiles from '../hooks/useFiles'
import Carousel from '../common/carousel/Carousel'
import { AppContext } from '../../App'
import Pagination from '../common/pagination/Pagination'
import {useStyles} from './styles/index'



function Pictures() {
    const [openUploadDialog, setOpenUploadDialog] = useState(false)
    const [pictureFile, setPictureFile] = useState([])
    const classes = useStyles()
    const {createPictures, pictureData, message, setMessage} = useFiles() 
    const [openCarousel, setOpenCarousel] = useState(false)
    const [currentValue, setCurrentValue] = useState('')
    const [page, setPage] = useState(1)
    const {user} = useContext(AppContext)

    const filterPictures = pictureData ? pictureData.filter(item => item.year === currentValue) : []
    let fileIds = filterPictures.length ? filterPictures.map(item => item.media_id) : []

    const onClick = (year) => {
        setOpenCarousel(true)
        setCurrentValue(year)
        fileIds = []
    }

    const onChangePagination = currentPage => {
        setPage(currentPage)
    }

        
    return (
        <Fragment>
            <Grid className={classes.root} container>
                
                {page === 1 && 
                <Fragment>
                    <ListItem className={classes.listItem}>
                            <Grid item xs={6}>
                                <Button variant="outlined" color="secondary" className={classes.button2008} onClick={() => onClick('2008')}>2008</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="outlined" color="secondary" className={classes.button2009} onClick={() => onClick('2009')}>2009</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="outlined" color="secondary" className={classes.button2010} onClick={() => onClick('2010')}>2010</Button>
                            </Grid>
                        </ListItem>
                        <ListItem className={classes.listItem}>
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
                        <ListItem className={classes.listItem}>
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
                        <ListItem className={classes.listItem}>
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
                </Fragment>}
                    {page === 2 && 
                    <Fragment>
                        <ListItem className={classes.listItem}>
                            <Grid item xs={4}>
                                <Button variant="outlined" color="secondary" className={classes.button2020} onClick={() => onClick('2020')}>2020</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="outlined" color="secondary" className={classes.button2021} >2021</Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="outlined" color="secondary" className={classes.button2022} >2022</Button>
                            </Grid>
                            </ListItem>
                    </Fragment>}
               
                {/* {user.data && */}
                    <Grid item xs={12}>
                        <DialogActions className={classes.dialogButton}>
                            <Button variant="outlined" className={classes.addButton} color="secondary" onClick={() => setOpenUploadDialog(true)}>Add Picture</Button>
                        </DialogActions>
                        <UploadDialog title='Upload Pictures' setFileId={setPictureFile} createMedia={createPictures} fileID={pictureFile} open={openUploadDialog} close={() => setOpenUploadDialog(false)} isVideo={false} allowedFileTypes={ACCEPTED_FILE_TYPES} maxFileSize={MAX_FILE_SIZE} label="Upload Pictures" onChange={id => setPictureFile(id)} />
                    </Grid>
                {/* } */}
            <Carousel open={openCarousel} onClose={() => setOpenCarousel(false)} fileIds={fileIds} picture/>
            <Pagination page={page} total={15} limit={12} onChange={onChangePagination}/>
            <Snackbar 
                open={!!message}
                autoHideDuration={6000}
                onClose={() => setMessage('')}
                message={message}
            />
            </Grid>
        </Fragment>
    )
}

export default Pictures