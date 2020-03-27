import React from 'react'
import { Button } from "@material-ui/core";
import { Fragment, useState } from "react";
import {useArtData} from "./hooks/useArtData";
import ArtDialog from './dialog/ArtDialog';
import { MAX_FILE_SIZE, ACCEPTED_FILE_TYPES } from './helpers/constants';

export default function Art() {
    const {artData, createArt} = useArtData()
    const [openDialog, setOpenDialog] = useState(false)
    const [artFile, setArtFile] = useState([])

    console.log(artData)

    return (
        <Fragment>
            <Button onClick={() => setOpenDialog(true)}>Add Artwork</Button>
            <Button>Age: 5</Button>
        <ArtDialog open={openDialog} close={() => setOpenDialog(false)} maxFileSize={MAX_FILE_SIZE} allowedFileTypes={ACCEPTED_FILE_TYPES} onChange={id => setArtFile(id)} label='Upload Artwork' fileId={artFile} createMedia={createArt} setFileId={setArtFile}/>
        </Fragment>
    )
}