import { useContext } from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import MapContext from './MapContext';
import DownloadFormatDropdown from './DownloadFormatDropdown';

function NavBar(){
    const navigate = useNavigate();
    const location = useLocation();

    const { mapInfo } = useContext(MapContext);

    function handleGoHome(event){
        event.stopPropagation();
        mapInfo.reset();
        navigate('/');
    }
    let mapContent = null;

    if(mapInfo && mapInfo.map && location.pathname === '/map'){
        mapContent = <>
            <Typography variant='h4' style={{ color: 'black' }}>{(mapInfo.mapTitle) ? mapInfo.mapTitle : 'Untitled Map'}</Typography>
            <DownloadFormatDropdown/>
        </>;
    }
    else{
        mapContent = null;
    }

    return(
        <AppBar position='static'>
            <Toolbar id='navbar'>
                <Box
                    component='img'
                    alt='Mapsterpiece Logo'
                    src='/assets/map_logo.png'
                    id='logo'
                    onClick={handleGoHome}
                />
                {mapContent}
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;