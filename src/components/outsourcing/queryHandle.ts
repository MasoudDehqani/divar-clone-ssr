
export default function queryHandle(query, url, params) {

  const categoryValues = Object.values(params)

  let queries = ""

  if (url.includes("?")) {
    queries = Object.entries(query)
    .map( (pair, index) => {
      if (!categoryValues.includes(pair[1])) {
        if (!index) return `?${pair[0]}=${pair[1]}`
        return `&${pair[0]}=${pair[1]}`
      }
      return ""
    })
    .reduce((prev, curr) => prev + curr);
  } 

  return queries
}