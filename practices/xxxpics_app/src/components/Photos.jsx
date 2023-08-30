import { useParams } from 'react-router-dom';
import { getGalleryById } from '../firebase/getGallery';
import { useEffect, useState } from 'react';

const Photos = ({ savedGalleriesFromDB }) => {
	const [gallery, setGallery] = useState(null);
	const { galleryID } = useParams();

	useEffect(() => {
		if (!savedGalleriesFromDB) {
			getGalleryById(galleryID)
				.then((galleryData) => {
					setGallery(galleryData);
				})
				.catch((e) => {
					console.log(e);
				});
		} else {
			const filteredGallery = savedGalleriesFromDB.filter((gallery) => {
				return gallery.id == galleryID;
			});
			setGallery(filteredGallery[0]);
		}
	}, [galleryID, savedGalleriesFromDB]);

	const allModels = new Intl.ListFormat('es').format(gallery?.models);

	const hasModels = (modelsLength) => {
		if (modelsLength === 0) return;
		if (modelsLength === 1) return <b>Modelo: {gallery.models}</b>;
		if (modelsLength > 1) return <b>Modelos: {allModels}</b>;
	};

	return gallery ? (
		<div>
			<div style={{ backgroundColor: '', marginTop: '20px' }}>
				<div style={{ maxWidth: '50%', margin: '0 auto', textAlign: 'center' }}>
					<h3>{gallery.title}</h3>
					<p>{hasModels(gallery.models.length)}</p>
				</div>
				{gallery?.images?.map((image, index) => (
					<img
						src={image}
						key={`${gallery.id}-${index}`}
						alt={`${gallery.title} ${index + 1}`}
						loading='lazy'
						style={{
							maxWidth: '100%',
							padding:
								gallery.images.length === index + 1 ? '5px' : '5px 5px 0 5px',
							display: 'block',
							margin: 'auto',
						}}
					/>
				))}
			</div>
		</div>
	) : (
		<h1>Esperando fotos...</h1>
	);
};

export default Photos;
