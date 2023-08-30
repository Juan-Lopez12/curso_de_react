import { useEffect, useState } from 'react';

const useFetch = (apiParams, query, addDataToDB) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [controller, setController] = useState(null);
	const [reFetch, setReFetch] = useState(false);
	const [url, options] = apiParams;

	useEffect(() => {
		const abortController = new AbortController();
		setController(abortController);

		if (query) {
			setLoading(true);
			fetch(`${url}${encodeURIComponent(query.replaceAll('+', ' '))}`, {
				...options,
				signal: abortController.signal,
			})
				.then((response) => response.json())
				.then((data) => {
					setData(data);
					addDataToDB(data);
				})
				.catch((e) => {
					if (e.name === 'AbortError') {
						console.log('Busqueda cancelada');
						setError('Busqueda cancelada');
					} else {
						setError(true);
					}
				})
				.finally(() => setLoading(false));
		}
		return () => abortController.abort();
	}, [url, options, reFetch, query]);

	const handleCancelRequest = () => {
		if (controller && loading) {
			controller.abort();
			setError('Busqueda cancelada');
		}
	};

	const handleRefetch = () => {
		setReFetch(!reFetch);
	};

	return {
		data,
		loading,
		error,
		setError,
		handleCancelRequest,
		handleRefetch,
		reFetch,
	};
};

export default useFetch;
