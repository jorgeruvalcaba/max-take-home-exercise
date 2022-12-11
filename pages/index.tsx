import { useState, useEffect } from 'react'

import { Genre, getGenres } from '../api/axios'

import { Layout } from '../components/Layout'
import { Search } from '../components/Search'

export default function Home() {
  const [genres, setGenres] = useState<Genre[]>([])
  const [selectedGenre, setSelectedGenre] = useState('')
  const [query, setQuery] = useState('')

  useEffect(() => {
    getGenres(query).then((response: any) => setGenres(response.data))
  }, [query])

  console.log({ query, genres, selectedGenre })

  return (
    <Layout>
      <h2 className="text-xl mb-4 font-lato">
        Enter a genre to find an artist:
      </h2>
      <Search
        items={genres}
        selected={selectedGenre}
        setSelected={setSelectedGenre}
        setQuery={setQuery}
      />
    </Layout>
  )
}
