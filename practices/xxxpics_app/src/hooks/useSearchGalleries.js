import { useEffect, useState } from 'react';
import { getGallery } from '../firebase/getGallery';
import { useNavigate } from 'react-router-dom';

export const useSearchGalleries = (query, reFetch) => {
	const [savedGalleriesFromDB, setSavedGalleriesFromDB] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		if (!query) return;
		getGallery(query.replaceAll(' ', '+'))
			.then((galleries) => {
				setSavedGalleriesFromDB(galleries);
				window.scrollTo(0, 0);
				navigate(`/galerias/${query.replaceAll(' ', '+')}`);
				console.log(galleries);
			})
			.catch((e) => {
				console.log(e);
			});
	}, [query, reFetch]);

	return { savedGalleriesFromDB, setSavedGalleriesFromDB };
};
