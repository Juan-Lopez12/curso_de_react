import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useRef } from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Search = ({ setSearch, loading }) => {
    const formValue = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(formValue.current.value)
        // console.log(typeof formValue.current.value)
    }

    return (
        <div>
            <Navbar
                className='fixed-top'
                style={{ backgroundColor: "#ff82cf" }}
                variant='dark'
                expand="lg"
            >
                <Container>
                    <Navbar.Brand><b>XXX Pics</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' style={{ backgroundColor: "#e64eac" }} />
                    <Navbar.Collapse>
                        <Nav className='me-auto' >
                            <Nav.Link>Actrices</Nav.Link>
                        </Nav>
                    <Form onSubmit={handleSubmit} className='d-flex' >
                        <Form.Control
                            type='text'
                            placeholder='Buscar'
                            aria-label='Search'
                            ref={formValue}
                            className='me-2'
                        />
                        <Button
                            type='submit'
                            style={{ backgroundColor: "#ae35ff", border: "#ae35ff" }}
                        >
                            Buscar
                        </Button>
                    </Form>
                    {loading &&
                        <Spinner
                            animation='border'
                            variant='info'
                            style={{ display: "block", margin: "auto", marginTop: "6px" }}
                        />
                    }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Search