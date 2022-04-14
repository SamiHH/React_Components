import './styles.css'
import ProfilePhoto from "./component/profile/profilePhoto"
import FullName from "./component/profile/fullName"
import Address from "./component/profile/address"

function App() {

  return (
    <div className='container'>
      <div>
        <ProfilePhoto/> 
        <FullName/>
      </div>
      <div>
        <Address/>
      </div>      

    </div>
  )
}

export default App
