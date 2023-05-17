import { useEffect, useState } from "react";
import Button from '../elements/Button'



const TestFetch = () => {
    
    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false)
    
    useEffect(() => {
        const url = 'https://porn-gallery.p.rapidapi.com/pornos/Lana%20Rhoades';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'cb12abdb01mshdff8734127f0201p150f4bjsne3a0e3cf55b5',
                'X-RapidAPI-Host': 'porn-gallery.p.rapidapi.com'
            }
        };
        fetch(url, options)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error(err))
            .finally(() => console.log("Ha cargado!"))
    }, [])





    return (
        <div>
            <div>
                {data
                ?
                Object.values(data.results[7].images).map(image => (
                    <img src={image} style={{maxWidth: "700px"}} alt="" />
                ))
                :
                <div>Cargando . . .</div>
            }
            </div>
            {/* <img src={data?.message} alt="" style={{maxWidth: "450px"}} /> */}
            <Button $black onClick={() => console.log(data)}>Nuevo dog!</Button>
        </div>
    )
}

export default TestFetch