import { useCallback, useEffect, useMemo, useState } from "react"
import urlHandle from "../outsourcing/urlHandle"
import fetchHandle from "../outsourcing/fetchHandle"
import breadCrumbsHandle from "../outsourcing/breadCrumbsHandle"
import useQueries from "./useQueries"

const usePathname = (baseUrl: string, pathname: string, city: string | null) => {

  const [data, setData] = useState({})
  const [status, setStatus] = useState(true)
  const queries = useQueries()
  const url = urlHandle(baseUrl, pathname, city)
  let completeURL = url + queries  

  let routes = useMemo(() => ({topLevel: "", level2: "", level3: ""}), [])
  let districts: string[] = useMemo(() => [], [])
  
  const fetchSetData = useCallback(async () => {

    const response = await fetchHandle(completeURL)

    if (!response) {
      setStatus(false)
      return
    }

    breadCrumbsHandle(response, routes, districts, response.seo_details.bread_crumbs[response.seo_details.bread_crumbs.length - 2].url)
    
    setData(response)
    setStatus(true)
    

  }, [completeURL, routes, districts])
  
  useEffect( () => {
    fetchSetData()
  }, [fetchSetData, completeURL])

  return { data, setData, routes, districts, completeURL, status }
}


export default usePathname;