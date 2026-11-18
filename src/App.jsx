import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <BrowserRouter>
      <Sidebar />

      <Routes>
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/application" element={<h1>Applications</h1>} />
        <Route path="/add-job" element={<h1>Add Job</h1>} />
        <Route path="/setting" element={<h1>Settings</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App