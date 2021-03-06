import React, { Fragment, useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { withStyles, Tooltip } from '@material-ui/core'
import styles from '../styles'
import { apiGetFileImageUrl } from '../../../../utils/api'


function CarouselThumbnail({ fileId, fileIndex, onClick, classes }) {
    const [url, setUrl] = useState()

    const imageUrl = useCallback(
        () => {
            apiGetFileImageUrl(fileId).then(({config}) => {
                setUrl(config.url)
                return config.url
            })
    }, [setUrl, fileId] )


    useEffect(() => {
    if(!!fileId) {
      imageUrl()
    }
    }, [imageUrl, fileId])

  return (
    <Fragment>
      <Tooltip title={`File ${fileIndex + 1}`} placement="top">
        <div onClick={onClick} className={classes.thumbnailButton} style={{ marginLeft: fileIndex * 158 }} />
      </Tooltip>
      <img alt="Thumbnail" src={url || ''} className={classes.fileThumbnail} aria-label="CarouselThumbnail" />
    </Fragment>
  )
}

CarouselThumbnail.propTypes = {
  fileId: PropTypes.string.isRequired,
  fileIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.object
}

export default withStyles(styles, { withTheme: true })(CarouselThumbnail)
