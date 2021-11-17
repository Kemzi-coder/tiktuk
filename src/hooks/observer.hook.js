import {useEffect, useMemo, useState} from 'react'

const useElementOnScreen = (options, targetRef) => {
	const [visible, setVisible] = useState()

	const callbackFunction = entries => {
		const [entry] = entries
		setVisible(entry.isIntersecting)
	}

	const optionsMemo = useMemo(() => {
		return options
	}, [options])

	useEffect(() => {
		const observer = new IntersectionObserver(callbackFunction, optionsMemo)
		const currentTarget = targetRef.current
		if (currentTarget) {
			observer.observe(currentTarget)
		}

		return () => {
			if (currentTarget) {
				observer.unobserve(currentTarget)
			}
		}
	}, [targetRef, optionsMemo])

	return visible
}

export default useElementOnScreen
