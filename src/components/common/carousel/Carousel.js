import React, { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import { withStyles, Dialog, Slide, CardHeader, CardContent, Typography, Box, DialogTitle} from '@material-ui/core'
import styles from './styles'
import { apiGetFileImageUrl } from '../../../utils/api'
import CarouselButtons from './buttons/CarouselButtons'
import CarouseleDialogClose from './buttons/CarouselDialogClose'
import CarouselThumbnail from './thumbnail/CarouselThumbnail'
import useFiles from '../../hooks/useFiles'
import DeleteFile from './dialog/DeleteFile'
import { useArtData } from '../../art/hooks/useArtData'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

function Carousel({ art, open, onClose, fileIds = [], classes, onDelete, picture}) {
  const [selectedFileId, setSelectedFileId] = useState(null)
  const [selectedFileIdIndex, setSelectedFileIdIndex] = useState(null)
  const [thumbnails, setThumbnails] = useState(null)
  const [url, setUrl] = useState()
  const refFileIds = useRef(fileIds)
  const {pictureData} = useFiles()
  const {artData} = useArtData()
  const [openDelete, setOpenDelete] = useState(false)
  const media = !!selectedFileId && !!picture ? pictureData.find(item => item.media_id === fileIds[selectedFileIdIndex]) : !!selectedFileId && !!art ? artData.find(item => item.media_id === fileIds[selectedFileIdIndex]) : []
  const {deletePictures} = useFiles()
  console.log(fileIds)
  console.log(selectedFileId, selectedFileIdIndex, fileIds[selectedFileIdIndex])
    
  const imageUrl = useCallback(
    () => {
        apiGetFileImageUrl(selectedFileId).then(({config}) => {
            setUrl(config.url)
            return config.url
        })
    }, [setUrl, selectedFileId] )


    useEffect(() => {
      if (!!selectedFileId) {
        imageUrl()
      }
    }, [imageUrl, selectedFileId])

  function handlePreviousFile() {
    const previousIndex = selectedFileIdIndex !== -1 ? selectedFileIdIndex - 1 : fileIds.length - 1
    console.log(previousIndex)
    setSelectedFileIdIndex(previousIndex)
    setSelectedFileId(fileIds[previousIndex])
  }

  function handleNextFile() {
    const nextIndex = selectedFileIdIndex + 1 !== fileIds.length ? selectedFileIdIndex + 1 : 0
    setSelectedFileIdIndex(nextIndex)
    setSelectedFileId(fileIds[nextIndex])
  }

  function deleteFile() {
    deletePictures(media._id)
    setOpenDelete(false)
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
          fileIdArray={fileIds}
          //this key is wrong for artwork
          fileIndex={key}
          onClick={() => {
              setSelectedFileIdIndex(key + 1)
              setSelectedFileId(fileIds[key + 1])
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
      <DialogTitle className={classes.title}>{!!selectedFileId && media.title }</DialogTitle>
      {!!art ? 
      <CardContent>
        <Typography className={classes.title}>Age: {media.age}</Typography>
      </CardContent> : null}
      <CardContent className={classes.fileContainer}>
          <Typography className={classes.title}>Picture taken: {new Date(media.date_created).toLocaleDateString()} </Typography>
          <Box>
            <img alt="Moser" src={url || ''} className={classes.fileDisplay} />
          </Box>
      </CardContent>
      <CardContent className={classes.fileThumbnailsContainer}>{thumbnails}</CardContent>
      <CardContent>
        <CarouselButtons
          onPrevious={handlePreviousFile}
          onNext={handleNextFile}
          onClose={onClose}
          onDelete={() => setOpenDelete(true)}
          ableToDelete={!!onDelete}
          picture={picture}
        />
        {!!picture && !!art &&
        <DeleteFile open={openDelete} close={() => setOpenDelete(false)} deleteFile={deleteFile} media={media}/>}
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
