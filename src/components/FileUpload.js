import React from 'react';
import { Box } from '@mui/material';

function FileUpload({ fileFormat }){
    return(
        <Box>
            {fileFormat}
        </Box>
    )
}

export default FileUpload;