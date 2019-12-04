import React, { useState, Fragment, useEffect } from 'react'
import { Typography, Button, Grid } from '@material-ui/core'
import AddQuotesDialog from './AddQuotesDialog'
import useFiles from '../hooks/useFiles'
import ViewQuotesDialog from './ViewQuotesDialog'

function Quotes() {
    const [openQuoteDialog, setOpenQuoteDialog] = useState(false)
    const [openViewQuote, setOpenViewQuote] = useState(false)
    const [index, setIndex] = useState(0)
    const {quoteData} = useFiles()
    console.log(quoteData)
    const lengthOfQuoteData = quoteData ? quoteData.length : 0
    console.log(lengthOfQuoteData)

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max)) 
      }

      useEffect(
          () => {
            const randomIndex = getRandomInt(lengthOfQuoteData)
            console.log(randomIndex)
            setIndex(randomIndex)
          }, [setIndex, getRandomInt]
      )

    return (
        <Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h2">Quotes</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={() => setOpenQuoteDialog(true)}>Add Quote</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={() => setOpenViewQuote(true)}>Generate random quote</Button>
                </Grid>
            </Grid>
            <AddQuotesDialog open={openQuoteDialog} close={() => setOpenQuoteDialog(false)}/>
            <ViewQuotesDialog open={openViewQuote} close={() => setOpenViewQuote(false)} data={quoteData ? quoteData[index] : []} setIndex={setIndex} />
        </Fragment>
    )
}

export default Quotes