import React from 'react';

import {
    Divider,
    Grid, List, ListItem, ListItemIcon, ListItemText, Paper
} from '@material-ui/core';
import './userDetail.css';
import {LocationOnSharp, Work} from "@material-ui/icons";


/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        "user": window.cs142models.userModel(props.match.params.userId),
    }

  }

  componentDidUpdate(prevProps) {
      if (this.props.match.params.userId !== prevProps.match.params.userId) {
          this.setState({ user: window.cs142models.userModel(this.props.match.params.userId)});
      }
  }

    render() {
    return (
        <Grid item xs={12}>
            <Paper>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <LocationOnSharp/>
                        </ListItemIcon>
                        <ListItemText primary={`${this.state.user.location}`}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Work/>
                        </ListItemIcon>
                        <ListItemText primary={`${this.state.user.occupation}`}/>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText primary={`${this.state.user.description}`}/>
                    </ListItem>
                </List>
            </Paper>
        </Grid>
    );
  }
}

export default UserDetail;
