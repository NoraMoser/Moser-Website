import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import styles from '../styles'

function CarouselThumbnail({ fileId, fileIndex, onClick, classes }) {
    const [url, setUrl] = useState('');

    useEffect(() => {
        if (fileId) {
            const baseUrl = 'https://noral-master.onrender.com';
            setUrl(`${baseUrl}/api/media/${fileId}`);
        }
    }, [fileId]);

    return (
        <Fragment>
            <div onClick={onClick} className={classes.thumbnailButton} style={{ marginLeft: fileIndex * 158 }} />
            <img alt="Thumbnail" src={url} className={classes.fileThumbnail} aria-label="CarouselThumbnail" />
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
