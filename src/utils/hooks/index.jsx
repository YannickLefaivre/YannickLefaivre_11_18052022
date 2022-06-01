import { useEffect, useState } from 'react'

export function useFetch(url) {
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url)
        const data = await response.json()

        console.log('Fetched data:', data)
        setData(data)
      } catch (e) {
        console.log(
          "Fetching of accommodation data doesn't succeed because of this error:",
          e
        )
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { isLoading, data, error }
}
