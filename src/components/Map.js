import { useContext, useRef } from 'react';
// import html2canvas from 'html2canvas';

import MapContext from './MapContext';
import GeojsonMap from './GeojsonMap';
import KmlMap from './KmlMap';

function Map(){
    const { mapInfo } = useContext(MapContext);
    const mapRef = useRef(null);

    if(!mapInfo){
        return null;
    }

    return(
        <div ref={mapRef}>
            {
                (mapInfo.fileFormat !== 'Keyhole(KML)') ?
                    <GeojsonMap map={mapInfo.map}/> :
                        <KmlMap map={mapInfo.map}/>
                // (mapInfo.fileFormat === 'Keyhole(KML)') ?
                //     null
                //     // <KmlMap map={mapInfo.map}/>
                //         : <GeojsonMap map={mapInfo.map}/>
            }
        </div>
    );
}

export default Map;