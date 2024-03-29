import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useRef, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Link, Outlet } from 'react-router-dom';
import ToastError from './ToastError';

const Search = ({
	setSearch,
	loading,
	data,
	error,
	setError,
	handleRefetch,
}) => {
	const formValue = useRef(null);
	const [expandedNavbar, setExpandedNavbar] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearch(formValue.current.value);
		if (!loading) {
			handleRefetch();
		}
	};

	useEffect(() => {
		setExpandedNavbar(false);
	}, [data]);

	return (
		<div>
			<Navbar
				className='fixed-top'
				style={{ backgroundColor: '#ff82cf61', backdropFilter: 'blur(5px)' }}
				variant='dark'
				expand='lg'
				collapseOnSelect
				expanded={expandedNavbar}
			>
				<Container>
					<Navbar.Brand>
						<b>XXX Pics</b>
					</Navbar.Brand>
					<Navbar.Toggle
						aria-controls='basic-navbar-nav'
						style={{ backgroundColor: '#e64eac' }}
						onClick={() => setExpandedNavbar(!expandedNavbar)}
					/>
					<Navbar.Collapse>
						<Nav className='me-auto'>
							<Link to={'/actrices'}>Actrices</Link>
							<Link to={'/galerias'}>Galerias</Link>
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
								disabled={loading}
							>
								{!loading ? (
									'Buscar'
								) : (
									<span
										style={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
										}}
									>
										<Spinner
											animation='border'
											size='sm'
											style={{ marginRight: '4px' }}
										/>
										Buscando...
									</span>
								)}
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
			<ToastError
				error={error}
				setError={setError}
			/>
			<Outlet />
		</div>
	);
};

export default Search;
