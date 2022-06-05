import { useEffect, useState } from 'react'

/**
 * Retrieve data from the address specified by the url parameter.
 *
 * @param {String} url - the url of the resource to fetch as indicated in the mdn description of the resource parameter of the fetch() api.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/fetch
 * @returns {{isLoading: boolean, data: Object, error: boolean}} information from the result of a GET request, such as: the loading status of the resource, the data retrieved and the presence of an error.
 */
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
