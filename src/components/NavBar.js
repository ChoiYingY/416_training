import { useContext } from 'react';
import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import MapContext from './MapContext';

function NavBar(){
    const navigate = useNavigate();
    const location = useLocation();

    const { mapInfo } = useContext(MapContext);

    let mapContent = null;

    if(mapInfo && mapInfo.mapTitle && mapInfo.map && location.pathname === '/map'){
        mapContent = <>
            <Typography variant='h4' style={{ color: 'black' }}>{mapInfo.mapTitle}</Typography>
            <Button variant='outlined'>Download</Button>
        </>;
    }
    else{
        mapContent = null;
    }

    function handleGoHome(event){
        event.stopPropagation();
        mapInfo.reset();
        navigate('/');
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