import Carousel from "react-bootstrap/Carousel"
import Photos from './Photos'
import useOnObserver from '../hooks/useOnObserver'

const Pack = ({ result }) => {
    const [containerRef, isVisible] = useOnObserver({
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    })

    return (
        <div style={{ margin: "5px 0px 60px" }}>
            {/* Etiqueta "a" para que al presionar el boton al final de la galeria del componente "Photos" con el atributo "href={`#${result.id}`}" nos redirija a al titulo de la galeria */}
            <a name={result.id}></a>
            <h2>{result.title}</h2>
            <p>
                {result.models.length > 1
                    ?
                    <b>Modelos: {result.models.join(", ")}</b>
                    :
                    <b>Modelo: {result.models}</b>
                }
            </p>
            <div ref={containerRef}>
                <Carousel
                    interval={isVisible ? 1000 : null}
                    variant="dark"
                >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={result.images[0]}
                            alt={`Preview 1 ${result.title}`}
                
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={result.images[6]}
                            alt={`Preview 7 ${result.title}`}
                
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={result.images[9]}
                            alt={`Preview 10 ${result.title}`}
                
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={result.images[result.images.length - 2]}
                            alt={`Preview ${result.images.length - 1} ${result.title}`}
                
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <Photos result={result} />
        </div>
    )
}

export default Pack