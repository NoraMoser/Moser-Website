import React from 'react'
import { Button, makeStyles, Grid, DialogActions, Typography } from "@material-ui/core";
import { Fragment, useState } from "react";
import {useArtData} from "./hooks/useArtData";
import ArtDialog from './dialog/ArtDialog';
import { MAX_FILE_SIZE, ACCEPTED_FILE_TYPES } from './helpers/constants';
import Carousel from '../common/carousel/Carousel';

const useStyles = makeStyles(theme => ({
    addArtButton: {
        position: 'absolute',
        top: 14,
    },
    root: {
        backgroundColor: 'black',
        color: 'white',
        height: '100%',
        width: '100%'
    },
    dialogButton: {
        margin: '7%'
    },
    arthurButton: {
        backgroundImage: 'url(AArtbutton.jpg)',
        backgroundSize: '100% 100%',
        height: '400px',
        width: '300px',
        marginBottom: 'calc(100vh - 500px)'
    },
    lachlanButton: {
        backgroundImage: 'url(LArtbutton.jpg)',
        backgroundSize: '100% 100%',
        height: '400px',
        width: '300px',
        marginBottom: 'calc(100vh - 500px)'
    }
}))

export default function Art() {
    const {artData, createArt} = useArtData()
    const [openDialog, setOpenDialog] = useState(false)
    const [artFile, setArtFile] = useState([])
    const classes = useStyles()
    const [openCarousel, setOpenCarousel] = useState(false)
    const [name, setName] = useState('')

    const filterArtByName = artData.filter(item => item.name === name)
    const fileIDs = filterArtByName.length ? filterArtByName.map(item => item.media_id) : []

    const handleOpenCarousel = name => {
        setOpenCarousel(true)
        setName(name)
    }

    return (
        <Fragment>
            <Grid className={classes.root} container>
                <Grid item xs={12}>
                    <Typography variant="h3">Artwork</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Button className={classes.arthurButton} variant="contained" color="primary" onClick={() => handleOpenCarousel('Arthur')}></Button>
                </Grid>
                <Grid item xs={6}>
                    <Button className={classes.lachlanButton} variant="contained" color="primary" onClick={() => handleOpenCarousel('Lachlan')}></Button>
                </Grid>
                <Grid item xs={12}>
                    <DialogActions className={classes.dialogButton}>
                        <Button variant="outlined" color="secondary" className={classes.addArtButton} onClick={() => setOpenDialog(true)}>Add Artwork</Button>
                    </DialogActions>
                </Grid>
            </Grid>
        <ArtDialog open={openDialog} close={() => setOpenDialog(false)} maxFileSize={MAX_FILE_SIZE} allowedFileTypes={ACCEPTED_FILE_TYPES} onChange={id => setArtFile(id)} label='Upload Artwork' fileId={artFile} createMedia={createArt} setFileId={setArtFile}/>
        <Carousel art open={openCarousel} onClose={() => setOpenCarousel(false)} fileIds={fileIDs}/>
        </Fragment>
    )
}