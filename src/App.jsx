import './App.css'
import avatar from './assets/avatar-jessica.jpeg'
import SocialCard from './components/SocialCard'
function App() {

  return (
    <div className="App">
      <SocialCard
        avatar={avatar}
        avatarAlt="A black woman with curly hair with a serious expression."
        name="Jessica Randall"
        location="London, United Kingdom"
        carrer="Front-end developer and avid reader."
      />
    </div>
  )
}

export default App
