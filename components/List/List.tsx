import { Artist } from '../../api'
import { ListItem } from './ListItem'

type ListProps = {
  artists: Artist[]
  genre: string
}

export const List = ({ artists, genre }: ListProps) => {
  return (
    <div className="mt-16 w-full flex flex-col items-center">
      {artists.map((artist: Artist) => (
        <ListItem key={artist.id} artist={artist} genre={genre} />
      ))}
    </div>
  )
}
