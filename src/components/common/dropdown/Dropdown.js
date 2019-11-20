import React, { useState } from 'react'
import { MenuItem, Menu } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    menu: {
        marginTop: 50
    }
}))

const options = [
    'Videos',
    'Quotes',
    'Pictures'
  ];

function Dropdown({open, anchorEl, close}) {
    const classes = useStyles()
    const [selectedIndex, setSelectedIndex] = useState(0)

    const createMenuItems = (item, key) => {
        return (
            <MenuItem
              key={key}
              selected={key === selectedIndex}
              onClick={event => onClick(event, key)}>
                  {item}
              </MenuItem>
        )
    }

    const onClick = (event, index) => {
        setSelectedIndex(index)
        close()
    }
    return (
        <Menu open={open} className={classes.menu} anchorEl={anchorEl}>
            {options.map(createMenuItems)}
        </Menu>
    )
}

export default Dropdown