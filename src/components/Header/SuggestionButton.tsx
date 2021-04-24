import React from 'react'
import Button from "@material-ui/core/Button"
import Link from "@material-ui/core/Link"
import { Link as RouterLink, useParams } from "react-router-dom"
import { suggestionBarUrl } from "../Sidebar/dataStructured"

function SuggestionButton({text, categoryName, index} : {text: string, categoryName: string; index: number}) {

  const {city} = useParams<{city: string, category: string}>()

  return (
    <Link underline="none" component={RouterLink} to={`/${city}/${suggestionBarUrl[index]}`}>
      <Button style={{fontFamily: "Vazir", color: "#a12727", border: "1px solid #a12727", borderRadius: "50px", margin: "0 5px", height: "30px"}} variant="outlined">
        {text}
      </Button>
    </Link>
  )
}

export default SuggestionButton
