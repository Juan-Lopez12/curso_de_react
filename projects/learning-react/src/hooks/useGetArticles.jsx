import {useState, useEffect} from 'react'

const useGetArticles = () => {
    const [articles, setArticle] = useState([])
    const  [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setArticle([
                {
                    id: 1,
                    title: 'Titulo del primer articulo'
                },
                {
                    id: 2,
                    title: 'Titulo del segundo articulo'
                },
                {
                    id: 3,
                    title: 'Titulo del tercer articulo'
                }
            ])
            setLoading(false)
        }, 3000);
    }, [])
    return [articles, loading];
}

export default useGetArticles