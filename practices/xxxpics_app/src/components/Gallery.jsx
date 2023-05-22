import Pack from './Pack'

const Gallery = ({ data }) => {

    console.log("Datos cargados!")
    console.log(data)

    return (
        <div>
            {data.results.map(result => (
                    <Pack key={result.id} result={result} />
                ))
            }
        </div>
    )
}

export default Gallery