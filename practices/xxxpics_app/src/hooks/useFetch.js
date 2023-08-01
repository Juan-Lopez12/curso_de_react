import { useEffect, useState } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	// const [toggle, setToggle] = useState(false)

	useEffect(() => {
		setLoading(true);
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'cb12abdb01mshdff8734127f0201p150f4bjsne3a0e3cf55b5',
				'X-RapidAPI-Host': 'porn-gallery.p.rapidapi.com',
			},
		};
		fetch(url, options)
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch(() => setError(true))
			.finally(() => setLoading(false));
	}, [url]);

	return { data, loading, error, setError };
};

export default useFetch;
