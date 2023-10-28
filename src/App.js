import './App.css';
import NavBar from './components/NavBar';
import Map from './components/Map';
import UploadMap from './components/UploadMap';

import { MapContextProvider } from './components/MapContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
       <div className='App'>
        <MapContextProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<UploadMap/>}></Route>
            <Route path='/map' element={<Map/>}></Route>
          </Routes>
        </MapContextProvider>
      </div>
    </Router>
  );
}

export default App;