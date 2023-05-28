import useFetch from '../hooks/useFetch'
import Gallery from './Gallery'
import LoadingGallery from './LoadingGallery'
import ToastError from './ToastError'
import Spinner from 'react-bootstrap/Spinner'


const ShowGallery = ({ search }) => {
    const { data, loading, error, setError } = useFetch(
        search
        ? `https://porn-gallery.p.rapidapi.com/pornos/${encodeURIComponent(search)}`
        : `https://porn-gallery.p.rapidapi.com/pornos/Lana%20Rhoades`
        )

    return (
        <div>
            {error && <ToastError setError={setError} /> }
            {loading && <Spinner animation='border' variant='info' /> }
            <button onClick={() => console.log(data)}>Nuevo dog!</button>
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