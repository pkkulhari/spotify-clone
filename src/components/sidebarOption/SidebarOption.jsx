import './sidebarOption.scss'

const SidebarOption = ({ title, Icon, id, setSelectedPlaylistId }) => {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <span onClick={() => setSelectedPlaylistId(id)}>{title}</span>}
    </div>
  )
}

export default SidebarOption
