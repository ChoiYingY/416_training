import { useContext, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';

import MapContext from './MapContext';
import GeojsonMap from './GeojsonMap';
import KmlMap from './KmlMap';

function Map(){
    const { mapInfo } = useContext(MapContext);
    const mapRef = useRef(null);

    useEffect(() => {
        if(mapRef.current && mapInfo.download && mapInfo.downloadFormat !== ''){
            const extension = mapInfo.downloadFormat.toLowerCase();
            console.log(`mapInfo.download: ${mapInfo.download}`);

            html2canvas(mapRef.current).then((canvas) => {
                const imgData = canvas.toDataURL(`image/${extension}`);
                const name = (mapInfo.mapTitle) ? mapInfo.mapTitle : 'Untitled';
                
                // Create a link element to download the image
                const link = document.createElement('a');
                link.href = imgData;
                link.download = `${name}.${extension}`;
                link.click();

                mapInfo.cancelDownload();
            });
        }
    }, [mapInfo?.download, mapInfo?.downloadFormat]);

    if(!mapInfo){
        return null;
    }
    
    return(
        <>
            {
                (mapInfo.fileFormat === 'Keyhole(KML)') ?
                    <div ref={mapRef}>
                        <KmlMap map={mapInfo.map}/>
                    </div>
                :
                <div ref={mapRef}>
                    <GeojsonMap map={mapInfo.map}/>
                </div>
            }
        </>
    );
}

export default Map;