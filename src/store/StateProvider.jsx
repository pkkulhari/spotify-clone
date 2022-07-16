const { createContext, useReducer, useContext } = require('react')

const StateContext = createContext()

const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)

export default StateProvider
