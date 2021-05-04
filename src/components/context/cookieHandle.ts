
export default function cookieHandle(city: string | string[]) {

  if (typeof window !== "undefined") {

    if (city) {
      localStorage.setItem("city", city as string)
      document.cookie = `city=${city}; max-age=31536000`
      return city
    }

    city = localStorage.getItem("city")
    console.log(city)
    if (city) document.cookie = `city=${city}; max-age=31536000`
    return city
  }
}