import { Outlet } from 'react-router-dom';
import Gallery from './Gallery';
import LoadingGallery from './LoadingGallery';
import ToastError from './ToastError';

const ShowGallery = ({ data, error, setError }) => {
	return (
		<div>
			<ToastError
				error={error}
				setError={setError}
			/>
			<Outlet />
			{/* <button onClick={() => console.log(data)}>Nuevo dog!</button> */}
			{data ? (
				<Gallery data={data} />
			) : (
				<>
					<LoadingGallery />
					<LoadingGallery />
					<LoadingGallery />
				</>
			)}
		</div>
	);
};

export default ShowGallery;
