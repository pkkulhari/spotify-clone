import './player.scss'
import Sidebar from '../sidebar/Sidebar'
import Body from '../body/Body'
import Footer from '../footer/Footer'
import { useState } from 'react'

const Player = ({ spotify }) => {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState('37i9dQZF1E35nibv84TV5y')

  return (
    <div className="player">
      <div className="player__body">
        <Sidebar setSelectedPlaylistId={setSelectedPlaylistId} />
        <Body spotify={spotify} selectedPlaylistId={selectedPlaylistId} />
      </div>
      <Footer />
    </div>
  )
}

export default Player
