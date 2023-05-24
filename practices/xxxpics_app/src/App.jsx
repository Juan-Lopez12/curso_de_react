import { useState } from 'react'
import Search from './components/Search'
import ShowGallery from './components/ShowGallery'

function App() {

  const [search, setSearch] = useState("")

  return (
    <div className="container">
      <h1>XXX Pics</h1>
      <Search search={search} setSearch={setSearch} />
      <ShowGallery search={search} />
    </div>
  )
}
// useFetch(`https://porn-gallery.p.rapidapi.com/pornos/${encodeURIComponent(search)}`)
export default App
