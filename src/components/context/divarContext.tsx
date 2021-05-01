import React, { createContext, useContext } from 'react'
import { useRouter } from "next/router"
import initialContextValues, {ContextType} from "./initialContextValues"
import localStorageHandle from "./localStorageHandle"

export const DivarContext = createContext<ContextType>(initialContextValues)
export const useDivarContext = () => useContext(DivarContext)

const DivarContextProvider = ({ children }) => {

  let { query: {city} } = useRouter()
  city = localStorageHandle(city)

  const { baseUrl } = initialContextValues
  
  return <DivarContext.Provider value={{ baseUrl , city }}>{children}</DivarContext.Provider>
}

export default DivarContextProvider