import './App.css';
import NavBar from './components/NavBar';
import UploadMap from './components/UploadMap';

import { MapContextProvider } from './components/MapContext';

function App() {
  return (
    <div className='App'>
      <MapContextProvider>
        <NavBar/>
        <UploadMap/>
      </MapContextProvider>
    </div>
  );
}

export default App;