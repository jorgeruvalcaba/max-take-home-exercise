import { useState, useEffect } from 'react'

import { getGenres } from '../api/axios'

import { Layout } from '../components/Layout'
import { SearchBar } from '../components/SearchBar'

export default function Home() {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getGenres()
      .then((json) => {
        setGenres(json)
        return json
      })
      .then((json) => {
        setSearchResults(json)
      })
  }, [])

  console.log({ genres })

  return (
    <Layout>
      <SearchBar searchItems={genres} setSearchResults={setSearchResults} />
    </Layout>
  )
}
