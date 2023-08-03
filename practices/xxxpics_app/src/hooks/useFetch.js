import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	// const [toggle, setToggle] = useState(false)

	useEffect(() => {
		setLoading(true);
		options;
		fetch(url, options)
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch(() => setError(true))
			.finally(() => setLoading(false));
	}, [url, options]);

	return { data, loading, error, setError };
};

export default useFetch;
