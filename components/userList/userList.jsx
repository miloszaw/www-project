import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';
import './userList.css';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "users": window.cs142models.userListModel(),
    }
  }

  getFormattedUserList() {
    return this.state.users.map((value) => (
          <ListItem key={value._id} button divider component="a" href={`#/users/${value._id}`}>
            <ListItemText primary={`${value.first_name} ${value.last_name}`} />
          </ListItem>
    ));
  }

  render() {
    return (
      <div>
        <Typography className={"users"} variant="button">
          Users
          <Divider/>
        </Typography>
        <List className={"nav"} component="nav">
          {this.getFormattedUserList()}
        </List>
      </div>
    );
  }
}

export default UserList;
