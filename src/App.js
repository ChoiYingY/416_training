import './App.css';
import NavBar from './components/NavBar';
import UploadMap from './components/UploadMap';

import { MapContextProvider } from './components/MapContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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