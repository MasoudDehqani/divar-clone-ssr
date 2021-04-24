import React, { useState } from 'react'
import { AppBar, Toolbar, List, ListItem, Button, Box, Container, Paper, Avatar } from "@material-ui/core"
import { LocationOnRounded } from "@material-ui/icons"
// import makeStyles from "@material-ui/core/styles/makeStyles"
import image2 from  './images/Capture2.JPG';
import Hidden from "@material-ui/core/Hidden"
import MenuIcon from "@material-ui/icons/Menu"
// import Menu from "@material-ui/core/Menu"
import MenuItem from '@material-ui/core/MenuItem';
import Link from "@material-ui/core/Link"
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import MobileMenu from './MobileMenu';
import DesktopNav from './DesktopNav';
import DivarLogo from './DivarLogo';
import CitySelectionButton from './CitySelectionButton';
import CitySelectionModal from '../CitySelection/CitySelectionModal';

function Navbar() {

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <Container>
      <CitySelectionModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <AppBar style={{backgroundColor: 'white', boxShadow: '0 0.1px 10px 0.2px rgba(0,0,0,0.1)', borderBottom: '1px solid rgba(0,0,0,0.1)'}}>
      

        
        <Toolbar>
          <Box display="flex" width="100%" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center">
              <DivarLogo />
              <CitySelectionButton onClick={() => setModalOpen(true)} />
            </Box>

            <Box display="flex" alignItems="center">
              <Hidden smDown>
                <DesktopNav />
              </Hidden>
              <Button onClick={() => console.log('123')} style={{fontFamily: 'inherit', boxShadow: 'none', width: '95px', height: '41px', color: 'white', fontWeight: 'bold', backgroundColor: '#a12727', fontSize: '15px'}} variant="contained">ثبت آگهی</Button>
              
              <Hidden mdUp>
                <MobileMenu />
              </Hidden>
            </Box>
          </Box>
          
          
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default Navbar
