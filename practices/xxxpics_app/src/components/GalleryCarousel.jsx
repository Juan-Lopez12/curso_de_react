import Carousel from 'react-bootstrap/Carousel';
import useOnObserver from '../hooks/useOnObserver';
import { useRef } from 'react';

const GalleryCarousel = ({ result }) => {
	const [containerRef, isVisible] = useOnObserver({
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
	});

	const ref = useRef(null);

	const allModels = new Intl.ListFormat('es').format(result.models);

	const hasModels = (modelsLength) => {
		if (modelsLength === 0) return;
		if (modelsLength === 1) return <b>Modelo: {result.models}</b>;
		if (modelsLength > 1) return <b>Modelos: {allModels}</b>;
	};

	return (
		<div>
			<h3 ref={ref}>{result.title}</h3>
			<p>{hasModels(result.models.length)}</p>
			<div
				ref={containerRef}
				className='container'
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
							loading='lazy'
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={result.images[6]}
							alt={`Preview 7 ${result.title}`}
							loading='lazy'
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={result.images[9]}
							alt={`Preview 10 ${result.title}`}
							loading='lazy'
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={result.images[result.images.length - 2]}
							alt={`Preview ${result.images.length - 1} ${result.title}`}
							loading='lazy'
						/>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
};

export default GalleryCarousel;
