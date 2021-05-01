
export default function localStorageHandle(city: string | string[]) {

  if (typeof window !== "undefined") {

    if (!!city) {
      localStorage.setItem("city", city as string)
      return city
    }

    city = localStorage.getItem("city")
    return city
  }
}