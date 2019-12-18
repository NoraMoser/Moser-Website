import React, { useState, Fragment} from 'react'
import { Button, Grid, DialogActions } from '@material-ui/core'
import AddQuotesDialog from './AddQuotesDialog'
import useFiles from '../hooks/useFiles'
import ViewQuotesDialog from './ViewQuotesDialog'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    buttonContainer: {
        width: '500px',
        height: '500px',
        backgroundImage: 'url(quoteButton.jpg)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: 'white',
        marginBottom: '50%',
        fontSize: 30,
        border: '4px solid white'
    },
    root: {
        backgroundColor: 'black',
        color: 'white',
        height: 'calc(100vh)'
    },
    addQuote: {
        position: 'absolute',
        top: 14,
    },
    dialogButton: {
        margin: '5%'
    }
}))

function Quotes() {
    const [openQuoteDialog, setOpenQuoteDialog] = useState(false)
    const [openViewQuote, setOpenViewQuote] = useState(false)
    const [index, setIndex] = useState(0)
    const {quoteData} = useFiles()
    const lengthOfQuoteData = quoteData ? quoteData.length : 0
    const classes = useStyles()

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max)) 
      }

      function onClickRandomQuote() {
          setOpenViewQuote(true)
          const index = getRandomInt(lengthOfQuoteData)
          setIndex(index)
      }

    return (
        <Fragment>
            <Grid className={classes.root} container spacing={3}>
                <Grid item xs={12}>
                    <DialogActions className={classes.dialogButton}>
                        <Button className={classes.addQuote} color="secondary" variant="outlined" onClick={() => setOpenQuoteDialog(true)}>Add Quote</Button>
                    </DialogActions>
                </Grid>
                <Grid item xs={12}>
                    <Button className={classes.buttonContainer} onClick={onClickRandomQuote}>Generate random quote</Button>
                </Grid>
            </Grid>
            <AddQuotesDialog open={openQuoteDialog} close={() => setOpenQuoteDialog(false)}/>
            <ViewQuotesDialog open={openViewQuote} close={() => setOpenViewQuote(false)} data={quoteData ? quoteData[index] : []} />
        </Fragment>
    )
}

export default Quotes