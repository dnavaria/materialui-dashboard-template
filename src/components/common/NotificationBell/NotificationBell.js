import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, IconButton, Tooltip } from "@mui/material";
import React from "react";
import BasicMenu from "../BasicMenu/BasicMenu";


const NotificationBell = ({ iconColor, badgeContent }) => {
    const newNotification = `You have ${badgeContent} new notifications`;
    const noNotification = `No new notification`;
    const notifications = [
        {
            id:0,
            label: 'First Notification'
        },
        {
            id:1,
            label: 'Second Notification'
        },
        {
            id:2,
            label: 'Third Notification'
        },
    ]
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Tooltip title={notifications.length ? newNotification : noNotification}>
                <IconButton
                    color={iconColor}
                    onClick={notifications.length ? handleOpen : null}
                    // anchorEl={anchorEl}
                >
                    <Badge badgeContent={notifications.length} color="error"><NotificationsIcon /></Badge>
                </IconButton>
            </Tooltip>
            <BasicMenu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
                menuItems={notifications}
            />
        </div>

    )
}

export default NotificationBell