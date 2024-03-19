import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Auth } from './components/Auth'

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth />}></Route>
      </Routes>   
    </BrowserRouter>

  </div>
}

export default App
