import {useCallback, useEffect, useState} from 'react'
import {apiKey} from '../config'
import axios from 'axios'

const useAxios = ({url}) => {
	const [response, setResponse] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const sendRequest = async () => {
			try {
				const response = await axios.get(url, {
					headers: {
						'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
						'x-rapidapi-key': apiKey
					}
				})

				console.log(response)

				if (response.statusText !== 'OK') {
					setError('Something went wrong!')
				} else if (!(response.data && response.data.length)) {
					setError('Response is empty!')
				}

				setResponse(response.data)
			} catch (e) {
				if (e.response) {
					setError('Response error!')
				} else if (e.request) {
					setError('No response received!')
				} else {
					setError(e.message)
				}

				setLoading(false)
			} finally {
				setLoading(false)
			}
		}

		sendRequest()
	}, [url])

	const clearError = useCallback(() => setError(null), [])

	return {response, error, clearError, loading}
}

export default useAxios
