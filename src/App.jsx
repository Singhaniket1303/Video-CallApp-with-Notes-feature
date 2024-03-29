import {Routes,Route} from 'react-router-dom'
import './App.css'
import Lobby from './component/Lobby'
import Room from './component/Room'
import RoomPage from './component/Room'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element = {<Lobby/>}/>
      <Route path='/room/:roomId' element = {<RoomPage/>}/>
    </Routes>
    
      
    </>
  )
}

export default App
