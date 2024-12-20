import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ColorPicker from './Pages/ColorPicker';
import TodoList from './Pages/ToDoList';


function App() {
 

  return (
    <>
     <BrowserRouter>
     <Navbar></Navbar>
     <Routes>
     <Route path="/" element={<Home  />} />
        <Route path="/about" element={<About  />} />
        <Route path="/contact" element={<Contact  />} />
        <Route path="/colorpicker" element={<ColorPicker  />} />
        <Route path="/todolist" element={<TodoList />} />
      
     
     </Routes>
     <Footer></Footer>
   
     </BrowserRouter>
    </>
  )
}

export default App
