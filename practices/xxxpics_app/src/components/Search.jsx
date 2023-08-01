import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useRef, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Search = ({ setSearch, loading, data }) => {
	const formValue = useRef(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		setSearch(formValue.current.value);
	};

	const [expanded, setExpanded] = useState(false);
	useEffect(() => {
		window.scrollTo(0, 0);
		setExpanded(false);
	}, [data]);

	return (
		<div>
			<Navbar
				className='fixed-top'
				style={{ backgroundColor: '#ff82cfe1' }}
				variant='dark'
				expand='lg'
				collapseOnSelect
				expanded={expanded}
			>
				<Container>
					<Navbar.Brand>
						<b>XXX Pics</b>
					</Navbar.Brand>
					<Navbar.Toggle
						aria-controls='basic-navbar-nav'
						style={{ backgroundColor: '#e64eac' }}
						onClick={() => setExpanded(!expanded)}
					/>
					<Navbar.Collapse>
						<Nav className='me-auto'>
							<Nav.Link>Actrices</Nav.Link>
						</Nav>
						<Form
							onSubmit={handleSubmit}
							className='d-flex'
							style={{ maxWidth: '400px', margin: '0 auto' }}
						>
							<Form.Control
								type='text'
								placeholder='Buscar'
								aria-label='Search'
								ref={formValue}
								className='me-2'
							/>
							<Button
								type='submit'
								style={{ backgroundColor: '#ae35ff', border: '#ae35ff' }}
							>
								Buscar
							</Button>
						</Form>
						{loading && (
							<Spinner
								animation='border'
								variant='info'
								style={{
									margin: 'auto',
									top: '13px',
									left: '0',
									right: '0',
									position: 'absolute',
								}}
							/>
						)}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Search;
