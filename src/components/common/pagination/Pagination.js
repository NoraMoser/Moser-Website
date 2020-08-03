import React from 'react'
import { Button, ListItemIcon, List, ListItem, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    pagination: {
        backgroundColor: theme.palette.primary.light,
        position: 'fixed',
        bottom: 0,
        width: '100%',
    }
}))

const Pagination = props => {
  const { page, total, limit, onChange } = props
  const classes = useStyles()

  const handlePageChange = page => {
    onChange(page)
  }

  const paginate = () => {
    const pageCount = total / limit
    const lastPage = pageCount % 1 === 0 ? pageCount : Math.ceil(pageCount)
    const offsetStart = 1
    const collection = []
    const pages = []
    const offsetEnd = 2
    const pageDisplay = 4
    let start = 1
    let end = lastPage

    if (end > 7) {
      end = pageDisplay
    }

    if (page > pageDisplay - 2 && lastPage > 8) {
      start = page - offsetStart
      end = page !== lastPage ? page + offsetEnd : lastPage + 1

      pages.push(
        <ListItemIcon key="page-first">
          <Button variant="contained" style={{ minWidth: 0, marginRight: 5 }} onClick={() => handlePageChange(1)}>
            First
          </Button>
        </ListItemIcon>
      )
    }

    while (start < end + 1) {
      collection.push(start)
      start++
    }

    collection.forEach((collectionPage, key) => {
      if (collectionPage <= lastPage) {
        pages.push(
          <ListItemIcon key={`page-${key}`}>
            <Button
              variant="contained"
              color={page === collectionPage ? 'secondary' : 'default'}
              style={{ minWidth: 0 }}
              onClick={() => handlePageChange(collectionPage)}
            >
              {collectionPage}
            </Button>
          </ListItemIcon>
        )
      }
    })

    if (lastPage > 6 && page < lastPage - offsetEnd) {
      pages.push(
        <ListItemIcon key="page-last">
          <Button variant="contained" style={{ minWidth: 0, marginLeft: 5 }} onClick={() => handlePageChange(lastPage)}>
            Last
          </Button>
        </ListItemIcon>
      )
    }
    return total ? pages : ''
  }

  return (
    <List className={classes.pagination}>
      <ListItem>{paginate()}</ListItem>
    </List>
  )
}

export default Pagination
