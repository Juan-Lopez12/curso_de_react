import { Button } from 'react-bootstrap';
import Pack from './Pack';
import { useNavigate } from 'react-router-dom';
// import Photos from './Photos';

const Gallery = ({ data }) => {
	console.log('Datos cargados!');
	console.log(data);

	const navigate = useNavigate();

	return (
		<div>
			{data.results.map((result) => (
				<div
					key={result.id}
					style={{ margin: '5px 0px 40px' }}
				>
					<Pack result={result} />
					<div className='d-grid gap-2'>
						<Button
							onClick={() => navigate(`/galerias/${result.id}`)}
							aria-controls='collapse-photos'
							aria-expanded={open}
							variant='outline-info'
							size='lg'
							style={{ margin: '5px' }}
						>
							Ver toda la galeria
						</Button>
					</div>
					{/* <Photos
						result={result}
						// refCurrent={ref.current}
					/> */}
				</div>
			))}
		</div>
	);
};

export default Gallery;
