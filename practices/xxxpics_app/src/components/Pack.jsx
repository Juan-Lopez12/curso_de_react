import Carousel from 'react-bootstrap/Carousel';
import useOnObserver from '../hooks/useOnObserver';
import { useRef } from 'react';

const Pack = ({ result }) => {
	const [containerRef, isVisible] = useOnObserver({
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
	});

	const ref = useRef(null);

	const models = new Intl.ListFormat('es').format(result.models);

	return (
		<div>
			<h2 ref={ref}>{result.title}</h2>
			<p>
				{result.models.length > 1 ? (
					<b>Modelos: {models}</b>
				) : (
					<b>Modelo: {result.models}</b>
				)}
			</p>
			<div
				ref={containerRef}
				className='container'
				// style={{ maxHeight: "500px" }}
			>
				<Carousel
					interval={isVisible ? 1000 : null}
					variant='dark'
				>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={result.images[0]}
							alt={`Preview 1 ${result.title}`}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={result.images[6]}
							alt={`Preview 7 ${result.title}`}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={result.images[9]}
							alt={`Preview 10 ${result.title}`}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={result.images[result.images.length - 2]}
							alt={`Preview ${result.images.length - 1} ${result.title}`}
						/>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
};

export default Pack;
