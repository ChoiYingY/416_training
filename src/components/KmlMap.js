import ReactLeafletKml from 'react-leaflet-kml';
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

function KmlMap({map}){
    if(!map){
        return null;
    }
    
    return (
        <MapContainer style={{ height: '80vh' }} center={[0, 0]} zoom={2}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <ReactLeafletKml map={map}/>
        </MapContainer>
    );
}

export default KmlMap;