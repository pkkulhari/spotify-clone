import './footer.scss'
import PlayCircleOutlineOutlined from '@mui/icons-material/PlayCircleOutlineOutlined'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import RepeatIcon from '@mui/icons-material/Repeat'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'
import { Slider } from '@mui/material'
import { useStateValue } from '../../store/StateProvider'

const Footer = () => {
  const [{ last_played_track }] = useStateValue()

  return (
    <div className="footer">
      <div className="footer__left">
        <img src={last_played_track?.album.images[0].url} alt="" className="footer__albumLogo" />
        <div className="footer__songInfo">
          <h4>{last_played_track?.album.name}</h4>
          <span>{last_played_track?.album.artists.map((artist) => artist.name).join(', ')}</span>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineOutlined className="footer__icon" fontSize="large" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <PlaylistPlayIcon className="footer__icon" />
        <VolumeDownIcon className="footer__icon" />
        <Slider size="small" />
      </div>
    </div>
  )
}

export default Footer
