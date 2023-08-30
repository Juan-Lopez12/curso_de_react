import { Button } from 'react-bootstrap';
import GalleryCarousel from './GalleryCarousel';
import { useNavigate } from 'react-router-dom';
import './Gallery.css';

const Gallery = ({ savedGalleriesFromDB, handleCancelRequest }) => {
	const navigate = useNavigate();

	return (
		<div>
			{savedGalleriesFromDB.map((result) => (
				<div
					key={result.id}
					style={{ margin: '5px auto 40px', maxWidth: '' }}
					className='gallery-container'
				>
					<GalleryCarousel result={result} />
					<div className='d-grid gap-2'>
						<Button
							onClick={() => {
								navigate(`/fotos/${result.id}`);
								window.scrollTo(0, 0);
								handleCancelRequest();
							}}
							variant='outline-info'
							size='lg'
							style={{ margin: '5px' }}
						>
							Ver toda la galeria
						</Button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Gallery;
