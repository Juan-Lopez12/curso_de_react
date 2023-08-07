// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

const Photos = ({ data }) => {
	// const [open, setOpen] = useState(false);

	// const handleScroll = () => {
	// 	refCurrent?.scrollIntoView({ behavior: 'smooth' });
	// 	setOpen(false);
	// };

	const { actress } = useParams();

	const filteredGalleries = data?.results?.filter((obj) => obj.id == actress);

	console.log(actress);
	console.log(filteredGalleries);
	console.log(data);

	let gallery = filteredGalleries[0];

	if (data) {
		gallery = filteredGalleries[0];
	}

	console.log(gallery);
	return (
		<div>
			<div style={{ backgroundColor: 'pink' }}>
				{
					gallery ? (
						gallery.images?.map((image, index) => (
							<img
								src={image}
								key={`${gallery.id}-${index}`}
								alt={`${gallery.title} ${index + 1}`}
								loading='lazy'
								style={{
									maxWidth: '100%',
									padding:
										gallery.images.length === index + 1
											? '5px'
											: '5px 5px 0 5px',
									display: 'block',
									margin: 'auto',
								}}
							/>
						))
					) : (
						<h1>Sin datos</h1>
					)
					// <Navigate to={'/galerias'} />
				}
			</div>
		</div>
	);
};

export default Photos;
