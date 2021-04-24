import { Box } from '@material-ui/core'
import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Widgets from '../Widgets/Widgets'

function Main() {
  return (
    <Box display="flex">
      <Sidebar />
        <Box display="flex" flexDirection="column">
          <Header />
          <Widgets />
        </Box>
    </Box>
  )
}

export default Main
