import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Auth } from './components/Auth'
import { Homepage } from './components/Homepage'
// import { UploadPfp } from './components/UploadPfp'
// import { ProfilePage } from './components/ProfilePage'
import { TechnoStream } from './components/TechnoStream'

function App() {
  return <div style={{height:"100%"}}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth />}></Route>
        <Route path='/home' element={<Homepage />}></Route>
        {/* <Route path='/profile' element={<ProfilePage />}></Route> */}
        <Route path='/ts' element={<TechnoStream />}></Route>
      </Routes>   
    </BrowserRouter>

    


  </div>
}

export default App
