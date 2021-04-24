import React, { createContext, useContext, useReducer } from 'react'
import usePathname from '../Hooks/usePathname'
import { NextRouter, useRouter } from "next/router"
import initialContextValues, {ContextType} from "./initialContextValues"
import UrlReducer from './UrlReducer'
import { GetServerSideProps } from 'next'

export const DivarContext = createContext<ContextType>(initialContextValues)
export const useDivarContext = () => useContext(DivarContext)

const DivarContextProvider = ({ children } : { children: React.ReactChild }) => {

  const [URL, dispatch] = useReducer(UrlReducer, "")

  const { asPath: pathname, query: {city} } = useRouter()
  const cityString = city as string
  // const { pathname } = useLocation()
  let cityLocalStorage: string
  if (typeof window !== "undefined") {
    cityLocalStorage = localStorage.getItem("city")
    if (!cityLocalStorage && !!city) localStorage.setItem("city", cityString)
  }

  const { data, setData, status, routes, districts, completeURL } = usePathname(initialContextValues.baseUrl, pathname.slice(2), cityString)
  
  // console.log(data);
  
  //@ts-ignore
  return <DivarContext.Provider value={{ baseUrl: initialContextValues.baseUrl, city }}>{children}</DivarContext.Provider>
}

export const getServerSideProps : GetServerSideProps = async ctx => {



  return {
    props: {

    }
  }
}

export default DivarContextProvider