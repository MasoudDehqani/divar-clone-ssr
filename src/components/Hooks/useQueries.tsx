import { useRouter } from "next/router"

const useQueries = () => {

  const { q } = useRouter().query
  
  let queries:string = ""
  
  let searchQuery = q
  queries += !searchQuery ? "" : `?q=${searchQuery}`

  return queries
}

export default useQueries;