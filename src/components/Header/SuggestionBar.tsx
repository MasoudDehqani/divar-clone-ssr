import React, { useContext } from 'react'
import { DivarContext, useDivarContext } from '../context/divarContext'
import SuggestionButton from './SuggestionButton'

const SuggestionBar = () => {

  const { data } = useDivarContext()

  return (
    <div style={{margin: "10px 0"}}>
      {data.suggestion_list?.map(({displayed_text, value} : {displayed_text: any, value: any}, index: number) => 
        <SuggestionButton
          key={displayed_text} 
          text={displayed_text} 
          categoryName={value.category.value}
          index={index}
        />)}    
    </div>
  )
}

export default SuggestionBar
