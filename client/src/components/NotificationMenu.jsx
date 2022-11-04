import React from 'react';
import { Menu, Button } from '@mui/material';
import AnnouncementCard from './AnnouncementCard.jsx';

class NotificationMenu extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <Menu {...this.props} open={Boolean(this.props.anchorEl)}>
                {this.props.notifs.map(v => (
                    <AnnouncementCard announcement={v} />
                ))}
                <Button sx={{width: "100%"}}>
                    Unregister from emails
                </Button>
            </Menu>
        )
    }
}

export default NotificationMenu;