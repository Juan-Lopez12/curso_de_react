import { useState } from 'react'
import useFetch from './hooks/useFetch'
import Search from './components/Search'
import ShowGallery from './components/ShowGallery'
import Actress from './components/Actress';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cb12abdb01mshdff8734127f0201p150f4bjsne3a0e3cf55b5',
    'X-RapidAPI-Host': 'porn-gallery.p.rapidapi.com',
  },
};

function App() {
  const [search, setSearch] = useState("")
  const { data, loading, error, setError } = useFetch(
    search
    ? `https://porn-gallery.p.rapidapi.com/pornos/${encodeURIComponent(search)}`
    : `https://porn-gallery.p.rapidapi.com/pornos/Lana%20Rhoades`,
    options
    )

  return (
    <div className="container">
      <Actress />
      <Search setSearch={setSearch} data={data} loading={loading} />
      {/* <ShowGallery data={data} error={error} setError={setError} /> */}
    </div>
  )
}

export default App