import React from 'react';

import {
    Divider,
    Grid, List, ListItem, ListItemIcon, ListItemText, Paper
} from '@material-ui/core';
import './userDetail.css';
import {LocationOnSharp, Work} from "@material-ui/icons";
import fetchModel from "../../lib/fetchModelData";


/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        "user": "",
    }

  }

  componentDidMount() {
      // Fetch user information
      fetchModel("/user/" + this.props.match.params.userId).then( result => {
          this.setState({user: JSON.parse(result)});
      });
  }


    componentDidUpdate(prevProps) {
      // Fetch updated user information
      if (this.props.match.params.userId !== prevProps.match.params.userId) {
          fetchModel("/user/" + this.props.match.params.userId).then( result => {
              this.setState({user: JSON.parse(result)});
          });
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
