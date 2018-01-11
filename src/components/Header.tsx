import * as React from 'react'
import { AppBar, Toolbar, Typography } from 'material-ui'

const Header = () => {
  return (
    <AppBar position='static' color='default'>
      <Toolbar>
        <Typography type='title' color='inherit'>
          DynamoDB Query Analyzer
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
