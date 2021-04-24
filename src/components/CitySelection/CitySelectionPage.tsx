import { Grid, Link, Paper } from '@material-ui/core'
import React, { useState } from 'react'
import Navbar from "../Navbar/Navbar"
import { allCities } from '../Sidebar/dataStructured'
import CitySelectionButton from './CitySelectionButton'
import {Link as RouterLink} from "react-router-dom"
import CitySelectionModal from './CitySelectionModal'

const CitySelectionPage = () => {

  const [modalOpen, setModalOpen] = useState(false)

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleCitySelection = (cityUrl: string) => {
    localStorage.setItem("city", cityUrl)
  }

  return (
    <div>
      <CitySelectionModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Navbar />
      <Paper>
      <h3>شهرهای پر بازدید</h3>
      <Grid container spacing={2}>
        {allCities.topCities.map((city: any) => 
          <Grid item onClick={() => handleCitySelection(city.url)}>
            <CitySelectionButton to={`/${city.url}`} onClick={handleClose} text={city.title} />  
          </Grid>
        )}

      </Grid>
      </Paper>
    </div>
  )
}

export default CitySelectionPage
