import Image from 'next/image'
import Link from 'next/link'

import { Artist } from '../../../api'
import { useSavedArtists } from '../../../context/SavedArtist'
import { Button } from '../../Button'

type ListItemProps = {
  artist: Artist
  genre: string
}

export const ListItem = ({ artist, genre }: ListItemProps) => {
  const { savedArtists, addArtist, removeArtist } = useSavedArtists()
  const isArtistSaved = savedArtists.some(
    (savedArtists) => savedArtists.id === artist.id
  )
  const handleSaveArtist = () => addArtist(artist)
  const handleRemoveArtist = () => removeArtist(artist.id)

  return (
    <div
      className="flex w-3/5 p-4 mb-14 rounded-lg border-2 border-white hover:shadow-lg hover:shadow-white"
      key={artist.id}
    >
      <div className="flex flex-row justify-between w-full">
        <div className="w-40 flex items-center">
          <Image
            className="object-scale-down w-full rounded"
            src={artist.image}
            alt={`${artist.name} image`}
            width={100}
            height={100}
          />
        </div>

        <div className="px-6 py-4 flex items-center">
          <div className="flex flex-col items-center">
            <Link href={`/artists/${artist.id}`}>
              <h4 className="mb-3 text-xl font-semibold tracking-tight text-white font-lato hover:underline hover:underline-offset-4">
                {artist.name}
              </h4>
            </Link>
            <p className="mb-2 text-sm leading-normal text-gray-300">{genre}</p>
          </div>
        </div>

        <div className="px-6 py-4 flex items-center">
          <Button
            onClick={isArtistSaved ? handleRemoveArtist : handleSaveArtist}
          >
            {isArtistSaved ? 'Remove' : 'Add'}
          </Button>
        </div>
      </div>
    </div>
  )
}
