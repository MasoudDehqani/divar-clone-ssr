import React, { createContext, useContext } from 'react'
import { useRouter } from "next/router"
import initialContextValues, {ContextType} from "./initialContextValues"
import cookieHandle from "./cookieHandle"

export const DivarContext = createContext<ContextType>(initialContextValues)
export const useDivarContext = () => useContext(DivarContext)
export let cityForServerSide: string | string[] = ""

const DivarContextProvider = ({ children }) => {

  let { query: {city} } = useRouter()
  city = cookieHandle(city)

  const { baseUrl } = initialContextValues
  
  return <DivarContext.Provider value={{ baseUrl , city }}>{children}</DivarContext.Provider>
}

export default DivarContextProvider