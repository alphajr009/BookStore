import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     
   <BrowserRouter>
   <Navbar />
        <Routes>


          <Route path="/" element={<Home />} exact />
          

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
