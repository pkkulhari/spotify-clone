import './header.scss'
import SearchIcon from '@mui/icons-material/Search'
import { Avatar } from '@mui/material'
import { useStateValue } from '../../store/StateProvider'

const Header = () => {
  const [{ user }] = useStateValue()

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search for Artists, Songs, or Podcasts" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header
