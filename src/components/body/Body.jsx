import Header from '../header/Header'
import './body.scss'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import SongRow from '../songRow/SongRow'
import { useEffect, useState } from 'react'

const Body = ({ spotify, selectedPlaylistId }) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null)

  useEffect(() => {
    spotify.getPlaylist(selectedPlaylistId).then((playlist) => {
      setSelectedPlaylist(playlist)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPlaylistId])

  return (
    <div className="body">
      <Header />

      <div className="body__info">
        <img src={selectedPlaylist?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{selectedPlaylist?.name}</h2>
          <span>{selectedPlaylist?.description}</span>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {selectedPlaylist?.tracks.items.map((item) => (
          <SongRow track={item.track} key={item.track.id} />
        ))}
      </div>
    </div>
  )
}

export default Body
