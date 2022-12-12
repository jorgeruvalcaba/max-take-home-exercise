import { useState, useEffect } from 'react'

import { Genre, getGenres, getArtistByGenre, Artist } from '../api'

import { Layout } from '../components/Layout'
import { Search } from '../components/Search'
import { DEFAULT_ID } from '../constants'
import { List } from '../components/List'

export default function Home() {
  const [genres, setGenres] = useState<Genre[]>([])
  const [selectedGenre, setSelectedGenre] = useState<Genre>({
    id: DEFAULT_ID,
    name: '',
    parent_id: DEFAULT_ID,
  })
  const [query, setQuery] = useState('')
  const [artists, setArtists] = useState<Artist[]>()

  useEffect(() => {
    getGenres(query).then((response: any) => setGenres(response.data))
  }, [query])

  useEffect(() => {
    if (selectedGenre.id !== DEFAULT_ID) {
      getArtistByGenre(selectedGenre.id).then((response: any) =>
        setArtists(response.data)
      )
    }
  }, [selectedGenre])

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
      {artists ? <List artists={artists} genre={selectedGenre.name} /> : null}
    </Layout>
  )
}
