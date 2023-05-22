import useFetch from '../hooks/useFetch'
import Gallery from './Gallery'
import Spinner from 'react-bootstrap/Spinner'
import Placeholder from 'react-bootstrap/Placeholder'

const Index = () => {

    const { data, loading } = useFetch()


    return (
        <div>
            <button onClick={() => console.log(data)}>Nuevo dog!</button>
            {data
            ?
            <Gallery data={data} loading={loading} />
            :
            <>
                <Placeholder animation='glow' style={{ display: "block", margin: "10px 0" }} >
                    <Placeholder xs={1} md={2} style={{ fontSize: "24px", marginRight: "8px" }} />
                    <Placeholder xs={6} style={{ fontSize: "24px", marginRight: "8px" }} />
                    <Placeholder xs={3} style={{ fontSize: "24px" }} />
                </Placeholder>
                <Placeholder animation='glow' style={{ display: "block", margin: "10px 0" }} >
                    <Placeholder xs={3} md={1} style={{ fontSize: "24px", marginRight: "8px" }} />
                    <Placeholder xs={2} md={3} style={{ fontSize: "24px", marginRight: "8px" }} />
                    <Placeholder xs={6} md={2} style={{ fontSize: "24px" }} />
                </Placeholder>
                <Placeholder animation='glow' style={{ display: "block", margin: "10px 0" }} >
                    <Placeholder xs={2} md={1} style={{ fontSize: "14px", marginRight: "5px" }} />
                    <Placeholder xs={4} md={2} style={{ fontSize: "14px" }} />
                </Placeholder>
                <Placeholder animation='glow'>
                    <Placeholder
                        style={{
                            display: "grid",
                            placeItems: "center",
                            height: "50vh",
                            width: "100%",
                            backgroundColor: "papayawhip"
                        }}
                    >
                    <Spinner
                        animation='border'
                        variant='info'
                        style={{ marginBottom: "15px", display: "block" }}
                    />
                    </Placeholder>
                </Placeholder>
            </>
            }
        </div>
    )
}

export default Index