import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Grid, Button } from '@material-ui/core'
import { AppContext } from '../../../../App'

function CarouselButtons({ onPrevious, onNext, onClose, onDelete }) {

  const {user} = useContext(AppContext)
  console.log(user)
  return (
    <Grid container spacing={8}>
      <Grid item xs={4}>
        <Button variant="outlined" color="primary" onClick={onPrevious} fullWidth>
          Previous File
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="outlined" color="secondary" onClick={onClose} fullWidth>
          Close
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="outlined" color="primary" onClick={onNext} fullWidth>
          Next File
        </Button>
      </Grid>
      {user.data ?
        <Grid item xs={12}>
          <Button variant="outlined" color="primary" onClick={onDelete} fullWidth>
            Delete File
          </Button>
        </Grid>
      : null}
    </Grid>
  )
}

CarouselButtons.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

export default CarouselButtons
