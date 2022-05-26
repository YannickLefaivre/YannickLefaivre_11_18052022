import { useEffect, useState } from 'react'

export function useFetch(url) {
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()

      setData(data)
    } catch (e) {
      console.log('==== error ====', e)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { isLoading, data, error }
}
