import SidebarOption from '../sidebarOption/SidebarOption'
import './sidebar.scss'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import { useStateValue } from '../../store/StateProvider'

const Sidebar = ({ setSelectedPlaylistId }) => {
  const [{ playlists }] = useStateValue()

  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
        className="sidebar__logo"
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption
          title={playlist.name}
          key={playlist.id}
          id={playlist.id}
          setSelectedPlaylistId={setSelectedPlaylistId}
        />
      ))}
    </div>
  )
}

export default Sidebar
