import { useState, useEffect } from 'react'
import Link from 'next/link'
import { QueueListIcon } from '@heroicons/react/20/solid'

import { Genre, getGenres, getArtistByGenre, Artist } from '../api'
import { Layout } from '../components/Layout'
import { Search } from '../components/Search'
import { DEFAULT_ID } from '../constants'
import { List } from '../components/List'
import { Button } from '../components/Button'
import { useSavedArtists } from '../context/SavedArtist'

export default function Home() {
  const [genres, setGenres] = useState<Genre[]>([])
  const [selectedGenre, setSelectedGenre] = useState<Genre>({
    id: DEFAULT_ID,
    name: '',
    parent_id: DEFAULT_ID,
  })
  const [query, setQuery] = useState('')
  const [artists, setArtists] = useState<Artist[]>()
  const { savedArtists } = useSavedArtists()

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
      <div className="w-full flex flex-row justify-between">
        <h2 className="text-xl mb-4 font-lato">
          Enter a genre to find an artist:
        </h2>
        <Link href="/savedList">
          <Button>
            <div className="hover:underline hover:underline-offset-4 flex flex-row items-center">
              <QueueListIcon className="h-5 w-5 mr-1" aria-hidden="true" />
              View My List
              {savedArtists.length > 0 ? ` (${savedArtists.length})` : null}
            </div>
          </Button>
        </Link>
      </div>
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
