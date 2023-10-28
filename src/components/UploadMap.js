import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { FormControl, Tabs, Tab, TextField } from '@mui/material';

function UploadMap(){
    const [tab, setTab] = useState('map');

    const theme = createTheme({
        palette: {
          primary: {
            main: '#86C9B5',
          },
          secondary: {
            main: '#000000',
          },
        },
    });

    function handleChangeTab(event, newTab){
        setTab(newTab);
    }

    return (
        <ThemeProvider theme={theme}>
            <div class='flex-column' id='content'>
                <FormControl class='flex-column' id='upload-form'>
                    <Tabs
                        class='flex-row'
                        id='tab-section'
                        onChange={handleChangeTab}
                        textColor="secondary"
                        indicatorColor=''
                        value={tab}
                    >
                        <Tab id='tab' value='map' label='Create Map'/>
                        <Tab id='tab' value='post' label='Create Post'/>
                    </Tabs>
                    <TextField
                        id='title-input'
                        label='Map Title'
                        variant='outlined'
                    />
                </FormControl>
            </div>
        </ThemeProvider>
    )
}

export default UploadMap;