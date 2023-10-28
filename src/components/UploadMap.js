import React, { useState, useContext } from 'react';
import { Box, FormControl, Tabs, Tab, TextField } from '@mui/material';

import Dropdown from './Dropdown';
import MapContext from './MapContext';

function UploadMap(){
    const [tab, setTab] = useState('map');
    const [title, setTitle] = useState('');

    const { mapInfo } = useContext(MapContext);

    const handleChangeTab = (event, newTab) => {
        setTab(newTab);
    }
    
    const handleKeyPress = (event) => {
        if(event.key === 'Enter' && mapInfo){
            mapInfo.setTitle(title);
        }
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    return (
        <Box className='flex-column' id='content'>
            <FormControl className='flex-column' id='upload-form'>
                <Tabs
                    className='flex-row'
                    id='tab-section'
                    onChange={handleChangeTab}
                    value={tab}
                >
                    <Tab
                        id={tab === 'map' ? 'tab-selected' : 'tab'}
                        label='Create Map'
                        value='map'
                    />
                    <Tab
                        id={tab === 'post' ? 'tab-selected' : 'tab'}
                        label='Create Post'
                        value='post'
                    />
                </Tabs>
                <Box className='flex-column' id='upload-container'>
                    <TextField
                        id='title-input'
                        label='Map Title'
                        variant='outlined'
                        onChange={handleTitleChange}
                        onKeyDown={handleKeyPress}
                    />
                    <Dropdown/>
                </Box>
            </FormControl>
        </Box>
    )
}

export default UploadMap;