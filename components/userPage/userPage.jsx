import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import {Divider, Grid, List, ListItem, ListItemText, Typography} from "@material-ui/core";
import UserDetail from "../userDetail/userDetail";
import UserPhotos from "../userPhotos/userPhotos";
import fetchModel from "../../lib/fetchModelData";


class UserPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "user": "",
        }

    }

    componentDidMount() {
        fetchModel("/user/" + this.props.match.params.userId).then( result => {
            this.setState({user: JSON.parse(result)});
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            fetchModel("/user/" + this.props.match.params.userId).then( result => {
                this.setState({user: JSON.parse(result)});
            });
        }
    }

    render() {
        return (
            <HashRouter>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h2" className={"userFullName"}>{this.state.user.first_name} {this.state.user.last_name}</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        <List className={"flexContainer"}>
                            <ListItem button component="a" href={`#${this.props.match.url}/details`}>
                                <ListItemText primary="Details"/>
                            </ListItem>
                            <ListItem button component="a" href={`#${this.props.match.url}/photos`}>
                                <ListItemText primary="Photos"/>
                            </ListItem>
                        </List>
                    </Grid>
                    <Divider/>
                    <Grid item xs={12}>
                        <Switch>
                            <Route exact path="/user/:userId"
                                   render={ props => <UserDetail {...props}/> }
                            />
                            <Route path={`/user/:userId/details`}
                                   render={ props => <UserDetail {...props}/> }
                            />
                            <Route path={`/user/:userId/photos`}
                                   render={ props => <UserPhotos {...props}/> }
                            />

                        </Switch>
                    </Grid>
                </Grid>
            </HashRouter>

            /*

             */

            /*<Typography variant="body1">
              This should be the UserDetail view of the PhotoShare app. Since
              it is invoked from React Router the params from the route will be
              in property match. So this should show details of user:
              {this.props.match.params.userId}. You can fetch the model for the
              user from window.cs142models.userModel(userId).
            </Typography>

             */
        );
    }

}

export default UserPage;