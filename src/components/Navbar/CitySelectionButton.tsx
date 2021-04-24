import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { LocationOnRounded } from '@material-ui/icons'
import { useDivarContext } from '../context/divarContext'

const CitySelectionButton = ({onClick} : {onClick: React.MouseEventHandler<HTMLButtonElement>}) => {

  const {data} = useDivarContext()

  return (
    <Button onClick={onClick}>
      <LocationOnRounded style={{color: "rgba(0,0,0,0.4)", verticalAlign: 'middle'}} />
      <span style={{color: 'rgba(0,0,0,0.4)', fontFamily: "Vazir", fontStyle: "normal", fontWeight: 900, verticalAlign: 'middle'}}>{data.seo_details?.bread_crumbs[data.seo_details?.bread_crumbs.length - 2].name}</span>
    </Button>
  )
}

export default CitySelectionButton
