import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip, IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'

function CarouseleDialogClose({ onClose }) {
  return (
    <Tooltip title="Close">
      <IconButton onClick={onClose} color="secondary">
        <Close />
      </IconButton>
    </Tooltip>
  )
}

CarouseleDialogClose.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default CarouseleDialogClose
