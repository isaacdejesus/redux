import { useSelector } from 'react-redux'
const Notification = () => {
    const notification = useSelector(state => state.notifs)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
    const display = (
    <div style={style}>
      {notification}
      {console.log("Value of notif is: ", notification)}
    </div>
    );
  return (
      <div>
        {notification === null ? '' : display}
      </div>
  )
}

export default Notification
