import useFetch from '../hooks/useFetch'
import Gallery from './Gallery'
import LoadingGallery from './LoadingGallery'
import Spinner from 'react-bootstrap/Spinner'

const ShowGallery = ({ search }) => {

    const { data, loading } =
    useFetch(search
        ? `https://porn-gallery.p.rapidapi.com/pornos/${encodeURIComponent(search)}`
        : `https://porn-gallery.p.rapidapi.com/pornos/Lana%20Rhoades`
        )


    return (
        <div>
            {loading && <Spinner animation='border' variant='info' /> }
            <button onClick={() => console.log(data)}>Nuevo dog!</button>
            {data
            ?
            <Gallery data={data} loading={loading} />
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