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
import fetchModel from "../../lib/fetchModelData";

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "users": "",
    }
  }

  componentWillMount() {
      fetchModel("/user/list").then( result => {
          this.setState({
              users: JSON.parse(result).map((value) => (
                  <ListItem key={value._id} button divider component="a" href={`#/user/${value._id}`}>
                      <ListItemText primary={`${value.first_name} ${value.last_name}`} />
                  </ListItem>
              ))
          });
      });
  }


  render() {
    return (
      <div>
        <Typography className={"users"} variant="button">
          Users
          <Divider/>
        </Typography>
        <List className={"nav"} component="nav">
          {this.state.users}
        </List>
      </div>
    );
  }
}

export default UserList;
