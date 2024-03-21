import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Auth } from './components/Auth'
import { SignupPopup } from './components/SignupPopup'
import { Homepage } from './components/Homepage'

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth />}></Route>
        <Route path='/home' element={<Homepage />}></Route>
      </Routes>   
    </BrowserRouter>

    


  </div>
}

export default App
