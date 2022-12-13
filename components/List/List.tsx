import { Artist } from '../../api'
import { ListItem } from './ListItem'

type ListProps = {
  artists: Artist[]
  genre?: string | null
}

export const List = ({ artists, genre = null }: ListProps) => {
  return (
    <div className="mt-16 w-full flex flex-col items-center">
      {artists.map((artist: Artist) => (
        <ListItem
          key={artist.id}
          artist={artist}
          genre={genre ?? artist.genres[0].name}
        />
      ))}
    </div>
  )
}
