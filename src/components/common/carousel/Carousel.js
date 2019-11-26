import React, { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import { withStyles, Dialog, Slide, CardHeader, CardContent, Typography, Box, DialogTitle } from '@material-ui/core'
import styles from './styles'
import { apiGetFileImageUrl } from '../../../utils/api'
import CarouselButtons from './buttons/CarouselButtons'
import CarouseleDialogClose from './buttons/CarouselDialogClose'
import CarouselThumbnail from './thumbnail/CarouselThumbnail'
import useFiles from '../../hooks/useFiles'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

function Carousel({ open, onClose, fileIds = [], classes, onDelete}) {
  const [selectedFileId, setSelectedFileId] = useState(null)
  const [selectedFileIdIndex, setSelectedFileIdIndex] = useState(null)
  const [thumbnails, setThumbnails] = useState(null)
  const [url, setUrl] = useState()
  const refFileIds = useRef(fileIds)
  const {pictureData} = useFiles()
  const media = selectedFileId ? pictureData.find(item => item.media_id === selectedFileId) : []
    
  console.log(media)

  const imageUrl = useCallback(
    () => {
        apiGetFileImageUrl(selectedFileId).then(({config}) => {
            console.log('car', config.url)
            setUrl(config.url)
            return config.url
        })
    }, [setUrl, selectedFileId] )

    console.log('url', url)


    useEffect(() => {
    imageUrl()
    }, [imageUrl])

  function handlePreviousFile() {
    const previousIndex = selectedFileIdIndex - 1 !== -1 ? selectedFileIdIndex - 1 : fileIds.length - 1
    setSelectedFileIdIndex(previousIndex)
    setSelectedFileId(fileIds[previousIndex])
  }

  function handleNextFile() {
    const nextIndex = selectedFileIdIndex + 1 !== fileIds.length ? selectedFileIdIndex + 1 : 0
    setSelectedFileIdIndex(nextIndex)
    setSelectedFileId(fileIds[nextIndex])
  }

  useEffect(
    () => {
      if (refFileIds.current.toString() !== fileIds.toString()) {
        setSelectedFileId(fileIds[0])
        setSelectedFileIdIndex(0)
        const thumbnails = fileIds.map((fileId, key) => (
          <CarouselThumbnail
            key={`file-thumbnail-${key}`}
            fileId={fileId}
            fileIndex={key}
            onClick={() => {
              setSelectedFileId(fileId)
              setSelectedFileIdIndex(key)
            }}
          />
        ))
        setThumbnails(thumbnails)
        refFileIds.current = fileIds
      }
    },
    [fileIds, setSelectedFileId, setSelectedFileIdIndex, setThumbnails]
  )

  return (
    <Dialog open={open} onClose={onClose} PaperProps={{ className: classes.paper }} TransitionComponent={Transition} fullScreen>
      <CardHeader
        title="File Viewer"
        subheader={`${fileIds.length} file${fileIds.length > 1 ? 's' : ''} in queue`}
        subheaderTypographyProps={{ className: classes.text }}
        titleTypographyProps={{ className: classes.text }}
        action={<CarouseleDialogClose onClose={onClose} />}
      />
      <DialogTitle className={classes.title}>{selectedFileId ? media.title : ''}</DialogTitle>
      <CardContent className={classes.fileContainer}>
          <Typography className={classes.title}>Picture taken: {new Date(media.date_created).toLocaleDateString()}</Typography>
          <Box>
            <img src={url || ''} className={classes.fileDisplay} />
          </Box>
      </CardContent>
      <CardContent className={classes.fileThumbnailsContainer}>{thumbnails}</CardContent>
      <CardContent>
        <CarouselButtons
          onPrevious={handlePreviousFile}
          onNext={handleNextFile}
          onClose={onClose}
          onDelete={() => onDelete(selectedFileId)}
          ableToDelete={!!onDelete}
        />
      </CardContent>
    </Dialog>
  )
}

Carousel.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  fileIds: PropTypes.array,
  classes: PropTypes.object,
  onDelete: PropTypes.func
}

export default withStyles(styles, { withTheme: true })(Carousel)