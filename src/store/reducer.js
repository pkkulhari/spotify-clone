export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  selectedPlaylistId: '37i9dQZF1E35nibv84TV5y',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user }
    case 'SET_TOKEN':
      return { ...state, token: action.token }
    case 'SET_PLAYLISTS':
      return { ...state, playlists: action.playlists }
    case 'SET_LAST_PLAYED_TRACK':
      return { ...state, last_played_track: action.data }
    case 'SET_SELECTED_PLAYLIST_ID':
      return { ...state, selectedPlaylistId: action.selectedPlaylistId }
    default:
      return state
  }
}

export default reducer
