const styles = theme => {
    return {
      paper: {
        background: theme.palette.common.black
      },
      text: {
        color: theme.palette.common.white
      },
      title: {
        color: 'white'
      },
      textNoFile: {
        color: theme.palette.common.white,
        width: '100%',
        textAlign: 'center',
        marginTop: '33vh'
      },
      fileContainer: {
        height: 'calc(100vh - 300px)',
        overflowY: 'auto',
        display: 'flex'
      },
      fileDisplay: {
        flex: 1,
        height: '100%',
        width: 'auto', 
        marginLeft: 300
      },
      fileThumbnailsContainer: {
        height: 150,
        overflowX: 'auto',
        display: 'flex',
        padding: 0,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
      },
      fileThumbnail: {
        width: 146,
        height: 146,
        marginRight: theme.spacing(1)
      },
      thumbnailButton: {
        position: 'absolute',
        color: 'grey',
        zIndex: 3,
        width: 146,
        height: 146,
        marginRight: theme.spacing(1),
        cursor: 'pointer'
      }
    }
  }
  export default styles
  