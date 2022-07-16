import { useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import './App.css'
import Player from './components/player/Player'
import Login from './pages/login/Login'
import { getHashFromUri } from './spotify'
import { useStateValue } from './store/StateProvider'

const spotify = new SpotifyWebApi()

function App() {
  const [{ token }, dispatch] = useStateValue()

  useEffect(() => {
    const hash = getHashFromUri()
    window.location.hash = ''
    const _token = hash.access_token
    if (_token) {
      dispatch({ type: 'SET_TOKEN', token: _token })
      spotify.setAccessToken(_token)

      spotify.getMe().then((user) => {
        dispatch({ type: 'SET_USER', user })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({ type: 'SET_PLAYLISTS', playlists })
      })

      spotify.getMyRecentlyPlayedTracks({ limit: 1 }).then((tracks) => {
        dispatch({ type: 'SET_LAST_PLAYED_TRACK', data: tracks.items[0].track })
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className="app">{token ? <Player spotify={spotify} /> : <Login />}</div>
}

export default App
