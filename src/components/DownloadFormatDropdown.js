import { useState, useContext } from 'react';
import MapContext from './MapContext';

import { Button, Menu, MenuItem } from '@mui/material';

function DownloadFormatDropdown() {
    const options = ['PNG', 'JPG'];

    const { mapInfo } = useContext(MapContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        mapInfo.setDownloadFormat(options[index])
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Download Map
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default DownloadFormatDropdown;