import React, { useState, useEffect, useCallback } from 'react'
import { Dialog, Button, Grid, Typography, DialogContent, DialogActions } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import useFiles from '../hooks/useFiles'

const useStyles = makeStyles(theme => ({
    quoteContainer: {
        border: '1px black solid',
        width: 'auto',
        height: 100
    }
}))

function ViewQuotesDialog({open, close, data, setIndex}) {
    const classes = useStyles()
    console.log(data)
    const [indexDialog, setIndexDialog] = useState(1)
    const {quoteData} = useFiles()
    const lengthOfQuoteData = quoteData ? quoteData.length : 0
    console.log('in di', indexDialog)
    const [next, setNext] = useState(false)

    const getRandomInt = useCallback(
        (max) => {
            return Math.floor(Math.random() * Math.floor(max)) 
          }, []
    )

    function nextButtonClicked() {
        setIndex(indexDialog)
        setNext(true)
    }

      useEffect(
          () => {
              if (!!next) {
                  const randomIndex = getRandomInt(lengthOfQuoteData)
                  console.log(randomIndex)
                  setIndexDialog(randomIndex)
                  setNext(false)
              }
          }, [getRandomInt, lengthOfQuoteData, next, setNext]
      )
    
        return (
        <Dialog open={open} onClose={close}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <DialogContent>
                        <Typography variant="h5">By: {data.author}</Typography>
                        <Typography>Age: {data.age}</Typography>
                        <Typography className={classes.quoteContainer}>{data.quote}</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={nextButtonClicked}>Next</Button>
                    </DialogActions>
                </Grid>
            </Grid>
        </Dialog>
        )

}

export default ViewQuotesDialog