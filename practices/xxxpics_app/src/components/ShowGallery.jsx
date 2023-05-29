import Gallery from './Gallery'
import LoadingGallery from './LoadingGallery'
import ToastError from './ToastError'

const ShowGallery = ({ data, error, setError }) => {

    return (
        <div>
            {error && <ToastError setError={setError} /> }
            {/* <button onClick={() => console.log(data)}>Nuevo dog!</button> */}
            {data
            ?
            <Gallery data={data} />
            :
            <>
                <LoadingGallery />
                <LoadingGallery />
                {/* <LoadingGallery /> */}
            </>
            }
        </div>
    )
}

export default ShowGallery