import { useState } from 'react'
import useFetch from './hooks/useFetch'
import Search from './components/Search'
import ShowGallery from './components/ShowGallery'
import Actress from './components/Actress';
import { Route, Routes } from 'react-router-dom';
import Photos from './components/Photos';

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

	// const { actress } = useParams();

  // console.log(actress)

  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Search setSearch={setSearch} data={data} loading={loading} />} >
          <Route
            path='/actrices'
            element={<Actress />}
          />
          <Route
            path='/galerias/'
            element={
              <ShowGallery
                data={data}
                error={error}
                setError={setError}
              />}
          >
          </Route>
            <Route
              path='galerias/:actress'
              element={<Photos data={data} />}>
            </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App