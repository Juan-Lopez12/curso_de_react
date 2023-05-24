import { useState } from "react"
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'

const Photos = ({ result }) => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <div className="d-grid gap-2">
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="collapse-photos"
                    aria-expanded={open}
                    variant="outline-info"
                    size="lg"
                    style={{ margin: "5px 0px" }}
                >
                    {open ? "Ocultar galeria" : "Ver toda la galeria"}
                </Button>
            </div>
            <Collapse in={open} >
                <div style={{ backgroundColor: "pink" }} >
                    {result.images.map((image, index) => (
                        <img
                            src={image}
                            key={ `${result.id}-${index}`}
                            alt={`${result.title} ${index + 1}`}
                            loading="lazy"
                            style={{
                                maxWidth: "100%",
                                padding: result.images.length === (index + 1)
                                    ? "5px"
                                    : "5px 5px 0 5px",
                                display: "block",
                                margin: "auto"
                            }}
                        />
                        ))
                    }
                </div>
            </Collapse>
            {open
            ?
                <div className="d-grid gap-2">
                    <Button
                        // Este "href" nos redijira a un elemento "a" (En el componente "Pack") y abajo el titulo de cada una de las galerias en el componente "Galery"
                        href={`#${result.id}`}
                        onClick={() => setOpen(false)}
                        aria-expanded={open}
                        variant="outline-danger"
                        size="lg"
                        style={{ margin: "5px 0px" }}
                    >
                        Cerrar galeria
                    </Button>
                </div>
            :
                <></>
            }
        </div>
    )
}

export default Photos