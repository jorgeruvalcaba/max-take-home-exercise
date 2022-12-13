import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'

import { Button } from '../../components/Button'
import { Layout } from '../../components/Layout'
import { List } from '../../components/List'
import { useSavedArtists } from '../../context/SavedArtist'

export default function SavedList() {
  const { savedArtists, addArtist, removeArtist } = useSavedArtists()
  return (
    <Layout showTitle={false} title="My List">
      <div className="flex flex-row justify-between">
        <Link href="/">
          <Button>
            <ChevronLeftIcon className="h-5 w-5 mr-1" aria-hidden="true" />
            Back to Search
          </Button>
        </Link>
        <div />
      </div>

      <div className="mt-16 w-full flex flex-col items-center">
        <h1 className="text-5xl font-rubik mb-10 text-center">My List</h1>
        {savedArtists.length > 0 ? (
          <List artists={savedArtists} />
        ) : (
          <p className="text-2xl font-lato mt-40 text-center">
            No Artists in List
          </p>
        )}
      </div>
    </Layout>
  )
}
