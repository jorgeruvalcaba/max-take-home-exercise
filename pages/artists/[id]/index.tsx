import React from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeftIcon, QueueListIcon } from '@heroicons/react/20/solid'

import { Layout } from '../../../components/Layout'
import { Button } from '../../../components/Button'
import { Artist, getArtistDetails, getSimilarArtists } from '../../../api'
import { List } from '../../../components/List'
import { useSavedArtists } from '../../../context/SavedArtist'

type ArtistDetailsProps = {
  details: Artist[]
  similarArtists: Artist[]
}

export default function ArtistDetails({
  details,
  similarArtists,
}: ArtistDetailsProps) {
  const { savedArtists, addArtist, removeArtist } = useSavedArtists()
  const [artist] = details
  const primaryGenre = artist.genres.find((genre) => genre.is_primary)
  const filteredGenres = artist.genres.filter(
    (genre) => genre.name !== primaryGenre?.name
  )
  const filteredSimilarArtists = similarArtists.filter(
    (similarArtist) => similarArtist.id !== artist.id
  )
  const isArtistSaved = savedArtists.some(
    (savedArtists) => savedArtists.id === artist.id
  )
  const handleSaveArtist = () => addArtist(artist)
  const handleRemoveArtist = () => removeArtist(artist.id)

  return (
    <Layout title={`${artist.name} Details`}>
      <div className="flex flex-row justify-between">
        <Link href="/">
          <Button>
            <ChevronLeftIcon className="h-5 w-5 mr-1" aria-hidden="true" />
            Back to Search
          </Button>
        </Link>
        <Link href="/savedList">
          <Button>
            <div className="hover:underline hover:underline-offset-4 flex flex-row items-center">
              <QueueListIcon className="h-5 w-5 mr-1" aria-hidden="true" />
              View My List
              {savedArtists.length ? ` (${savedArtists.length})` : null}
            </div>
          </Button>
        </Link>
      </div>

      <div className="mt-16 w-full flex flex-col items-center">
        <main className="w-3/5 py-10 mb-14 rounded-lg border-2 border-white">
          <div className="flex justify-around mb-12">
            <div className="flex items-center">
              <Image
                src={artist.image}
                alt={`${artist.name} profile picture`}
                width={100}
                height={100}
                className="object-scale-down w-full rounded"
              />
            </div>

            <div>
              <h4 className="mb-4 text-xl font-semibold tracking-tight text-white font-lato">
                {artist.name}
              </h4>
              <p className="mb-4 text-md text-gray-200 font-lato">
                Primary Genre: {primaryGenre?.name ?? 'NA'}
              </p>
              <p className="mb-4 text-md text-gray-200 font-lato">
                Popularity: {artist.popularity}
              </p>
            </div>
            <div />
          </div>
          <div className="w-full flex justify-around px-md">
            <div>
              <h3 className="font-bold text-md font-lato">
                Additional Genres:
              </h3>
              <p className="text-md text-md font-lato text-gray-200">
                {filteredGenres.map((genre) => genre.name).join(', ')}
              </p>
            </div>
            <div />
            <Button
              onClick={isArtistSaved ? handleRemoveArtist : handleSaveArtist}
            >
              {isArtistSaved ? 'Remove' : 'Add'}
            </Button>
          </div>
        </main>

        {filteredSimilarArtists.length > 0 ? (
          <>
            <h2 className="text-xl mb-4 font-lato">Related Artists</h2>
            <List
              artists={filteredSimilarArtists}
              genre={primaryGenre?.name ?? 'NA'}
            />
          </>
        ) : null}
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  details: Artist[]
}> = async (context) => {
  const { id } = context.query

  const { data: details } = await getArtistDetails(Number(id))
  const { data: similarArtists } = await getSimilarArtists(Number(id))

  return { props: { details, similarArtists } }
}
