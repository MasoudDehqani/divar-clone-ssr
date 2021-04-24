
const fetchHandle = async (completeURL: string) => {

  try {
    const responsePromise = await fetch(completeURL)
    if (!responsePromise.ok) return null
    return responsePromise.json()
  } catch(err) {
    return null
  }
}

export default fetchHandle;