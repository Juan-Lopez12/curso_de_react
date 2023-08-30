import { useParams } from 'react-router-dom';
import Gallery from './Gallery';
import { useEffect } from 'react';
// import LoadingGallery from './LoadingGallery';

const ShowGallery = ({
	handleCancelRequest,
	setQuerySearchURL,
	savedGalleriesFromDB,
}) => {
	const { queryGalleries } = useParams();

	useEffect(() => {
		setQuerySearchURL(queryGalleries);
	}, [queryGalleries]);

	return (
		<div>
			{savedGalleriesFromDB ? (
				<Gallery
					savedGalleriesFromDB={savedGalleriesFromDB}
					handleCancelRequest={handleCancelRequest}
				/>
			) : (
				<div
					style={{
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%, -50%)',
					}}
				>
					<h2>
						¡No haz buscado nada aún! Usa el buscador para encontrar a tu actriz
						favorita o genero
					</h2>
					{/* <LoadingGallery />
					<LoadingGallery />
					<LoadingGallery /> */}
				</div>
			)}
		</div>
	);
};

export default ShowGallery;
