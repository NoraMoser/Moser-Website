import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { CircularProgress, Paper, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  loader: {
    top: 0,
    left: 0,
    backgroundColor:
      theme.palette.type === 'light' ? 'rgba(255, 255, 255, 1.0)' : 'rgba(0, 0, 0, 1.0)',
    textAlign: 'center'
  },
  full: {
    position: 'fixed',
    width: '100%',
    height: '100vh',
    zIndex: 10000
  },
  mini: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 10
  }
}))

function Loader({ loading, mini, children }) {
  const classes = useStyles()

  if (loading) {
    return (
      <Paper className={classnames(classes.loader, mini ? classes.mini : classes.full)}>
        <CircularProgress
          size={mini ? 30 : 50}
          color="primary"
          style={{
            left: `calc(50% - ${mini ? 15 : 25}px)`,
            position: 'absolute',
            top: `calc(50% - ${mini ? 15 : 25}px)`
          }}
        />
      </Paper>
    )
  }
  return children || null
}

Loader.propTypes = {
  loading: PropTypes.bool,
  mini: PropTypes.bool,
  children: PropTypes.any
}

export default Loader