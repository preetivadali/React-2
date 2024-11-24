import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
 

  return (
    <>
     <BrowserRouter>
     <Navbar></Navbar>
     <Routes>
     <Route path="/" element={<Home  />} />
        <Route path="/about" element={<About  />} />
        <Route path="/contact" element={<Contact  />} />
      
     
     </Routes>
     <Footer></Footer>
   
     </BrowserRouter>
    </>
  )
}

export default App
