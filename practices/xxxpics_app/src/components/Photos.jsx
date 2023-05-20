import { useState } from "react"
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'

const Photos = ({ result }) => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                // aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                {open ? "Ocultar galeria" : "Ver toda la galeria"}
            </Button>
            <Collapse in={open} >
                <div style={{ backgroundColor: "pink" }} >
                    {result.images.map((image, index) => (
                        <img
                            src={image}
                            key={index}
                            alt={`${result.title} ${index + 1}`}
                            style={{ maxWidth: "100%", marginBottom: "5px", margin: "10px", boxSizing: "border-box" }}
                        />
                        ))
                    }
                </div>
            </Collapse>
            {open
            ?
            <Button
                // Este "href" nos redijira a un elemento "a" y abajo el titulo de cada una de las galerias en el componente "Galery"
                href={`#${result.id}`}
                onClick={() => setOpen(false)}
                aria-expanded={open}
            >
                Cerrar galeria
            </Button>
            :
            <></>
            }
        </div>
    )
}

export default Photos