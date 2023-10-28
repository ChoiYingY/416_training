import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';

function NavBar(){
    function handleGoHome(event){
        event.stopPropagation();
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
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;