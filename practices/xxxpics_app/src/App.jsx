import { useState } from 'react'
import useFetch from './hooks/useFetch'
import Search from './components/Search'
import ShowGallery from './components/ShowGallery'
import Actress from './components/Actress';
import { Route, Routes } from 'react-router-dom';
// import Photos from './components/Photos';
import { Error404 } from './components/Error404';
import { addNewGalleries } from './firebase/addNewGalleries';
import Photos from './components/Photos';
import { useSearchGalleries } from './hooks/useSearchGalleries';

const PORN_GALLERY_PARAMS = {
  URL: 'https://porn-gallery.p.rapidapi.com/pornos/',
  OPTIONS: JSON.parse(
    import.meta.env.VITE_PORN_GALLERY_OPTIONS
  ),
}

function App() {
  const [search, setSearch] = useState(null)
  const [querySearchURL, setQuerySearchURL] = useState(null);
  
  const {
    data,
    loading,
    error,
    setError,
    handleCancelRequest,
    handleRefetch,
    reFetch
  } = useFetch(
    [PORN_GALLERY_PARAMS.URL, PORN_GALLERY_PARAMS.OPTIONS],
    search ?? querySearchURL,
    addNewGalleries,
    )

  const {
    savedGalleriesFromDB,
    setSavedGalleriesFromDB
  } = useSearchGalleries(
    search ?? querySearchURL,
    reFetch
  )

  return (
    <div className="container" >
      <Routes>
        <Route
          path='/'
          element={
            <Search
              search={search}
              setSearch={setSearch}
              data={data}
              loading={loading}
              error={error}
              setError={setError}
              handleRefetch={handleRefetch}
            />
          }
        >
          <Route
            path='/actrices'
            element={
              <Actress
                handleCancelRequest={handleCancelRequest}
              />}
          />
          <Route
            path='/galerias/:queryGalleries'
            element={
              <ShowGallery
                search={search}
                reFetch={reFetch}
                handleCancelRequest={handleCancelRequest}
                querySearchURL={querySearchURL}
                setQuerySearchURL={setQuerySearchURL}
                setSavedGalleriesFromDB={setSavedGalleriesFromDB}
                savedGalleriesFromDB={savedGalleriesFromDB}
              />}
          >
          </Route>
          <Route
            path='fotos/:galleryID'
            element={<Photos savedGalleriesFromDB={savedGalleriesFromDB} />}>
          </Route>
          <Route
							path='*'
							element={<Error404/>}
						/>
        </Route>
      </Routes>
    </div>
  )
}

export default App