import React from 'react'
import { Dialog, DialogContent, Typography, DialogActions, Button } from '@material-ui/core'

function DeleteFile({open, close, deleteFile, media}) {
    return (
      <Dialog open={open} onClose={close}>
        <DialogContent>
          <Typography>Are you sure you want to delete this {media.title}?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={deleteFile}>Delete</Button>
        </DialogActions>
      </Dialog>
    )
  }

  export default DeleteFile