import React, { useState } from 'react'
import { MenuItem, Menu } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import {withRouter} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    menu: {
        marginTop: 50
    }
}))

const options = [
    'Home',
    'Videos',
    'Quotes',
    'Pictures'
  ];

function Dropdown({open, anchorEl, close, history}) {
    const classes = useStyles()
    const [selectedIndex, setSelectedIndex] = useState(0)

    const createMenuItems = (item, key) => {
        return (
            <MenuItem
              key={key}
              value={key}
              selected={key === selectedIndex}
              onClick={event => onClick(event, key, item)}
              >
                  {item}
              </MenuItem>
        )
    }

    const onClick = (event, index, item) => {
        setSelectedIndex(index)
        const option = item === 'Home' ? '' : item
        history.push(`/${option}`)
        close()
    }
    return (
        <Menu open={open} className={classes.menu} anchorEl={anchorEl}>
            {options.map(createMenuItems)}
        </Menu>
    )
}

export default withRouter(Dropdown)