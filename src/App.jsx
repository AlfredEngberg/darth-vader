/* import './App.css' */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home.jsx'
import { About } from './pages/about.jsx'
import { Contact } from './pages/contact.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App