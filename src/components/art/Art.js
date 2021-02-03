import React from 'react'
import { Button, makeStyles, Grid, DialogActions } from "@material-ui/core";
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
        height: 'calc(100vh)'
    },
    dialogButton: {
        margin: '7%'
    },
    arthurAndLachlanButton: {
        height: '300px',
        width: 'auto',
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
    const fileIDs = !!filterArtByName && filterArtByName.map(item => item.media_id)

    const handleOpenCarousel = name => {
        setOpenCarousel(true)
        setName(name)
    }

    console.log(artData)

    return (
        <Fragment>
            <Grid className={classes.root} container spacing={3}>
                <Grid item xs={12}>
                    <DialogActions className={classes.dialogButton}>
                        <Button variant="outlined" color="secondary" className={classes.addArtButton} onClick={() => setOpenDialog(true)}>Add Artwork</Button>
                    </DialogActions>
                </Grid>
                <Grid item xs={6}>
                    <Button className={classes.arthurAndLachlanButton} variant="contained" color="primary" onClick={() => handleOpenCarousel('Arthur')}>Arthur</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button className={classes.arthurAndLachlanButton} variant="contained" color="primary" onClick={() => handleOpenCarousel('Lachlan')}>Lachlan</Button>
                </Grid>
            </Grid>
        <ArtDialog open={openDialog} close={() => setOpenDialog(false)} maxFileSize={MAX_FILE_SIZE} allowedFileTypes={ACCEPTED_FILE_TYPES} onChange={id => setArtFile(id)} label='Upload Artwork' fileId={artFile} createMedia={createArt} setFileId={setArtFile}/>
        <Carousel open={openCarousel} onClose={() => setOpenCarousel(false)} fileIds={openCarousel ? fileIDs : []}/>
        </Fragment>
    )
}