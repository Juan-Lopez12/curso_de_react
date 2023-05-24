import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useRef } from 'react'

const Search = ({ setSearch }) => {

    const formValue = useRef(null)

    const handleSubmit = (e) => {

        e.preventDefault()
        setSearch(formValue.current.value)
        // console.log(formValue.current.value)

    }

    return (
        <div>
            <Form onSubmit={handleSubmit} >
                <Form.Control
                    type='text'
                    placeholder='Buscar'
                    aria-label='Search'
                    ref={formValue}
                />
                <Button type='submit' variant='outline-success'>Buscar</Button>
            </Form>
        </div>
    )
}

export default Search