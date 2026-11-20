import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
 import Admissions from './pages/Admissions';
import Programs from './pages/Program';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Sidebar  from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1">
          <Sidebar />
          <div className="container-fluid p-4">
          <Routes>
          
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions/" element={<Admissions />} />
            <Route path="/admissions/new" element={<Admissions />} />
            <Route path="/admissions/list" element={<Admissions />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
             </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;



