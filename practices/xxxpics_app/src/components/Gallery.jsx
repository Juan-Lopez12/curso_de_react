

const Gallery = ({ data }) => {

    console.log("Datos cargados!")
    console.log(data)

    return (
        <div>
            {data.results.map(result => (
                <div key={result.id}>
                    <h3>{result.title}</h3>
                    <p>
                        {result.models.length > 1
                            ?
                            <b>Modelos: {result.models.join(", ")}</b>
                            :
                            <b>Modelo: {result.models}</b>
                        }
                    </p>
                    <img
                        src={result.images[0]}
                        alt={`Preview 1 ${result.title}`}
                    />
                    <img
                        src={result.images[7]}
                        alt={`Preview 7 ${result.title}`}
                    />
                    <img
                        src={result.images[result.images.length - 2]}
                        alt={`Preview ${result.images.length} ${result.title}`}
                    />
                    <div>
                        {result.images.map((image, index) => (
                            <img
                                src={image}
                                key={index}
                                alt={`${result.title} ${index + 1}`}
                                style={{ maxWidth: "200px" }}
                            />
                            ))
                        }
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default Gallery