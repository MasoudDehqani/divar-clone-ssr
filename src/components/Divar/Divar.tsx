import React, { useContext } from 'react'
import Navbar from "../Navbar/Navbar"
import { Redirect, Route, Switch } from "react-router-dom"
import { DivarContext, useDivarContext } from "../context/divarContext"
import CitySelectionPage from '../CitySelection/CitySelectionPage'
import Main from '../Main/Main'

function Divar() {
  
  const { status, city } = useDivarContext()

  if (!city) {
    return <CitySelectionPage />
  }
  
  if (!status) {
    return <h1>Not Found</h1>
  }
  
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/:city/:category" component={Main} />             
        <Route path="/:city" component={Main} />              
        <Route exact path="/" render={() => <Redirect to={`/${city}`} />} />
        <Route path="*" render={() => <h1>Not Found</h1>} />
      </Switch>
    </>
  )
}

export default Divar
