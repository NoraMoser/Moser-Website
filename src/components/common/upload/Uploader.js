import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button, IconButton, InputLabel, Tooltip } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { apiUploadFiles } from '../../../utils/api'
import { checkMimeType, checkFileSize } from '../../../utils/helpers'
import { makeStyles } from '@material-ui/styles'

const ERROR_MIME_TYPE = 'Only %mime_types% %to_be% allowed'
const ERROR_FILE_SIZE = 'File must be equal to or less than 1mb'

const styles = makeStyles({
  label: {
    marginTop: 15
  },
  fileResultsContainer: {
    margin: '5px 0 15px 0'
  },
  fileObject: {
    width: '100%'
  },
  error: {
    color: '#f30'
  }
})

function Uploader({ isVideo, allowedFileTypes, maxFileSize, label, onChange, multifile }) {
  const [fileIds, setFileIds] = useState([])
  const [thumbnails, setThumbnails] = useState([])
  const [errors, setErrors] = useState([])
  const classes = styles()

  function handleFiles(e) {
    // Clear errors
    setErrors([])

    // If multifile is false, clear file ids and thumbs
    if (!multifile) {
      setFileIds([])
      setThumbnails([])
    }

    // Handle incoming files
    const rawFiles = [...e.target.files]
    rawFiles.forEach(file => {
      const error = handleFileValidationErrors(file)
      if (error) {
        setErrors(prevErrors => [...prevErrors, ...error])  // Update state properly
      } else {
        const reader = new FileReader()
        !isVideo ? reader.addEventListener('load', () => handleUpload(file, reader.result)) : handleUpload(file, reader.result)
        reader.readAsDataURL(file)
      }
    })
  }

  function handleUpload(file, fileBase64) {
    // Create form data to submit to services
    const formData = new FormData()
    formData.append('image_id', file)

    apiUploadFiles(formData)
      .then(({ data }) => {
        // Add thumbnail
        setThumbnails(prevThumbnails => [...prevThumbnails, fileBase64])

        // Add file id
        setFileIds(prevFileIds => {
          if (!multifile && prevFileIds.length) {
            handleRemoveFile(0) // Clear the first file if not in multi-file mode
          }
          return [...prevFileIds, data]  // Add new file id
        })
      })
      .catch(error => {
        setErrors(prevErrors => [...prevErrors, error])
      })
  }

  function handleFileValidationErrors(file) {
    const errors = []
    const isValidMimeType = checkMimeType(allowedFileTypes, file)
    const isValidSize = checkFileSize(maxFileSize, file)

    if (!isValidMimeType) {
      const mimeTypeError = ERROR_MIME_TYPE.replace('%mime_types%', allowedFileTypes.toString().replace(/,/g, ', ')).replace(
        '%to_be%',
        allowedFileTypes.length === 1 ? 'is' : 'are'
      )
      errors.push(`${file.name} - ${mimeTypeError}`)
    }

    if (!isValidSize) {
      errors.push(`${file.name} - ${ERROR_FILE_SIZE}`)
    }

    return errors.length > 0 ? errors : null
  }

  const handleRemoveFile = fileIndex => {
    // Remove file id
    setFileIds(prevFileIds => {
      const updatedFileIds = [...prevFileIds]
      updatedFileIds.splice(fileIndex, 1)
      return updatedFileIds
    })

    // Remove thumbnail
    setThumbnails(prevThumbnails => {
      const updatedThumbnails = [...prevThumbnails]
      updatedThumbnails.splice(fileIndex, 1)
      return updatedThumbnails
    })

    setErrors([])  // Clear errors on removal
  }

  const createThumbNail = (thumb, key) => (
    <Fragment key={`file-thumb-${key}`}>
      <Tooltip title="Remove">
        <IconButton onClick={() => handleRemoveFile(key)}>
          <Close color="error" />
        </IconButton>
      </Tooltip>
      <object data={thumb} className={classes.fileObject} aria-label="Thumbnail" />
    </Fragment>
  )

  useEffect(() => {
    const change = !multifile ? fileIds[0] || '' : fileIds
    onChange(change)
  }, [onChange, multifile, fileIds])

  return (
    <Fragment>
      {!!label && <InputLabel className={classes.label}>{label}</InputLabel>}
      <Button variant="contained" component="label">
        {`Select File${multifile ? 's' : ''}`}
        <input accept={allowedFileTypes} style={{ display: 'none' }} onChange={handleFiles} multiple={multifile} type="file" />
      </Button>

      <div className={classes.fileResultsContainer}>
        {thumbnails.length ? thumbnails.map(createThumbNail) : null}
      </div>

      {/* Error handling */}
      <div className={classes.error}>
        {errors.length > 0 && errors.map((error, index) => <p key={index}>{error}</p>)}
      </div>
    </Fragment>
  )
}

Uploader.propTypes = {
  allowedFileTypes: PropTypes.array.isRequired,
  maxFileSize: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  multifile: PropTypes.bool
}

export default Uploader
