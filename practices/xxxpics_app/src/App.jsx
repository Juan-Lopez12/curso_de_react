import { useState } from 'react'
import useFetch from './hooks/useFetch'
import Search from './components/Search'
import ShowGallery from './components/ShowGallery'


function App() {
  const [search, setSearch] = useState("")
  const { data, loading, error, setError } = useFetch(
    search
    ? `https://porn-gallery.p.rapidapi.com/pornos/${encodeURIComponent(search)}`
    : `https://porn-gallery.p.rapidapi.com/pornos/Lana%20Rhoades`
    )

  return (
    <div className="container">
      <Search setSearch={setSearch} data={data} loading={loading} />
      <ShowGallery data={data} error={error} setError={setError} />
    </div>
  )
}

export default App