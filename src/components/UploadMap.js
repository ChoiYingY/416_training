import React, { useState } from 'react';
import { Box, FormControl, Tabs, Tab, TextField } from '@mui/material';

import Dropdown from './Dropdown';

function UploadMap(){
    const [tab, setTab] = useState('map');

    const handleChangeTab = (event, newTab) => {
        setTab(newTab);
    }

    return (
        <Box class='flex-column' id='content'>
            <FormControl class='flex-column' id='upload-form'>
                <Tabs
                    class='flex-row'
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
                <Box class='flex-column' id='upload-container'>
                    <TextField
                        id='title-input'
                        label='Map Title'
                        variant='outlined'
                        style={{ width: '85vw', backgroundColor: 'white' }}
                    />
                    <Dropdown/>
                </Box>
            </FormControl>
        </Box>
    )
}

export default UploadMap;