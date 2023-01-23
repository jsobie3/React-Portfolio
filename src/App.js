import About from "./components/About.jsx";

import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/work' element={<Work/>} />
      </Routes>
      {/* <Home />
      <About />
      <Skills />
      <Work /> */}
      
    </>
  );
}

export default App;
