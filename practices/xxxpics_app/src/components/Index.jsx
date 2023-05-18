import useFetch from '../hooks/useFetch'
import Gallery from './Gallery'

const Index = () => {

    const { data, loading } = useFetch()


    return (
        <div>
            <button onClick={() => console.log(data)}>Nuevo dog!</button>
            {data
            ?
            <Gallery data={data} loading={loading} />
            :
            <h3>Cargando datos . . .</h3>
            }
            <div>
                {/* {data
                ?
                Object.values(data.results[7].images).map(image => (
                    <img
                        src={image}
                        style={{maxWidth: "500px"}} 
                        alt=""
                    />
                ))
                :
                <div>Cargando . . .</div>
            } */}
            </div>
            {/* <img src={data?.message} alt="" style={{maxWidth: "450px"}} /> */}
        </div>
    )
}

export default Index