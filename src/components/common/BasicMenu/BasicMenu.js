
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

const BasicMenu = ({ menuItems ,anchorEl, handleClose, open }) => {
    return (
        <div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                {
                    menuItems.map((item) => (
                        <MenuItem key={item.id} onClick={handleClose}>{item.label}</MenuItem>
                    ))
                }
            </Menu>
        </div>
    );
}

export default BasicMenu