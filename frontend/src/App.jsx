import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Auth } from './components/Auth'
import { SignupPopup } from './components/SignupPopup'
import { Homepage } from './components/Homepage'
import { UploadPfp } from './components/UploadPfp'

function App() {
  return <div style={{height:"100%"}}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth />}></Route>
        <Route path='/home' element={<Homepage />}></Route>
        <Route path='/pfp' element={<UploadPfp/>}></Route>
      </Routes>   
    </BrowserRouter>

    


  </div>
}

export default App
