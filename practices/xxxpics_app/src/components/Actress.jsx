import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import topActress from '../topActress.js';
import { useEffect } from 'react';

console.log(topActress);
const Actress = ({ handleCancelRequest }) => {
	useEffect(() => {
		handleCancelRequest();
	}, []);

	return (
		<Row
			xs={1}
			md={2}
			lg={3}
			className='g-4'
			style={{ marginTop: '0px' }}
		>
			{topActress.map((actress) => (
				<Col key={actress.rank}>
					<Card
						key={actress.rank}
						bg='dark'
						style={{
							height: '100%',
							width: '100%',
							border: '1px solid #ff82cfe1',
						}}
					>
						<Card.Img
							variant='top'
							src={actress.image}
							style={{
								objectFit: 'cover',
								height: '100%',
								objectPosition: actress.name === 'Lana Rhoades' ? 'left' : null,
							}}
							// loading='lazy'
						/>
						<Card.Body>
							<Card.Title style={{ textAlign: 'center' }}>
								{actress.rank <= 5 ? '🌟' : '⭐'}
								{actress.rank}: {actress.name}
							</Card.Title>
							<Card.Text>Altura: </Card.Text>
							<Card.Footer style={{ display: 'flex' }}>
								<Button
									variant='primary'
									style={{ width: '100%', marginRight: '16px' }}
								>
									Ver Vídeos
								</Button>
								<Button
									variant='primary'
									style={{ width: '100%' }}
								>
									Ver Galerías
								</Button>
							</Card.Footer>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	);
};

export default Actress;
