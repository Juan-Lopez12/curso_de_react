import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const ToastError = ({ error, setError }) => {
	const closeError = () => {
		setError(false);
	};

	return (
		<ToastContainer
			position='bottom-end'
			containerPosition='fixed'
			style={{ margin: '6px' }}
		>
			<Toast
				show={error}
				onClose={closeError}
				bg={'danger'}
				// autohide
				style={{ color: 'white' }}
			>
				<Toast.Header
					style={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<strong>Ha ocurrido un error</strong>
				</Toast.Header>
				<Toast.Body>
					{typeof error === 'string' ? (
						error
					) : error ? (
						<span>
							Sin resultados o la búsqueda no coincide. <br /> Prueba usando
							palabras claves o intenta más tarde.
						</span>
					) : null}
				</Toast.Body>
			</Toast>
		</ToastContainer>
	);
};

export default ToastError;
