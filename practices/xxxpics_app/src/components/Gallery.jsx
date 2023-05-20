import Carousel from "react-bootstrap/Carousel"
import Photos from './Photos'

const Gallery = ({ data }) => {

    console.log("Datos cargados!")
    console.log(data)

    return (
        <div>
            {data.results.map(result => (
                
                <div key={result.id}>
                    {/* Etiqueta "a" para que al presionar el boton al final de la galeria del componente "Photos" con el atributo "href={`#${result.id}`}" nos redirija a al titulo de la galeria */}
                    <a name={result.id}></a>
                    <h3>{result.title}</h3>
                    <p>
                        {result.models.length > 1
                            ?
                            <b>Modelos: {result.models.join(", ")}</b>
                            :
                            <b>Modelo: {result.models}</b>
                        }
                    </p>
                    <Carousel
                        // className="sm md lg xl xxl"
                        // style={{ maxWidth: '90vw'}}
                        interval={null}
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
                                src={result.images[7]}
                                alt={`Preview 8 ${result.title}`}
                                
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
                    <Photos result={result} />
                </div>
                ))
            }
        </div>
    )
}

export default Gallery