import Photos from './Photos';

const LoadingPhotos = ({ data }) => {
	return <div>{data ? <Photos data={data} /> : <h2>Esperando datos</h2>}</div>;
};

export default LoadingPhotos;
