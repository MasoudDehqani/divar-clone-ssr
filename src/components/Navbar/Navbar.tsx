import React, { useState } from 'react'
import MobileMenu from './MobileMenu';
import DesktopNav from './DesktopNav';
import DivarLogo from './DivarLogo';
import CitySelectionButton from './CitySelectionButton';
import CitySelectionModal from '../CitySelection/CitySelectionModal';
import { Layout, Menu, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styles from "./styles.module.scss"
import NavbarMenu from './NavbarMenu';
import SubmitAdButton from './SubmitAdButton';

function Navbar() {

  const { Header, Content, Sider } = Layout;

  const [modalOpen, setModalOpen] = useState(false)

  const citySelectionHandle = () => {

  }

  return (
    <Header className={`${styles.header} header`}>
      <div>
        <DivarLogo />
        <CitySelectionButton onClick={citySelectionHandle} />
      </div>

      <div className={styles.buttonMenuContainer}>
        <NavbarMenu>
          <SubmitAdButton />
        </NavbarMenu>
      </div>
    </Header>
  )
}

export default Navbar

{/* <Container>
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
    </Container> */}