import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Route, Switch
} from 'react-router-dom';
import {
  Grid, Typography, Paper
} from '@material-ui/core';
import './styles/main.css';

// import necessary components
import TopBar from './components/topBar/TopBar';
import UserPage from './components/userPage/UserPage';
import UserList from './components/userList/UserList';

class PhotoShare extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter>
      <div>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <TopBar/>
        </Grid>
        <div className="cs142-main-topbar-buffer"/>
        <Grid item sm={3}>
          <Paper  className="cs142-main-grid-item">
            <UserList />
          </Paper>
        </Grid>
        <Grid item sm={9}>
          <Paper className="uPage">
            <Switch>
            <Route exact path="/"
                render={() =>
                  <Typography variant="body1">
                  <h1>Welcome to your photosharing app!</h1>
                  </Typography>}
              />
              <Route path="/user/:userId"
                render={ props => <UserPage {...props}/> }
              />
              <Route path="/users" component={UserList}  />
            </Switch>
          </Paper>
        </Grid>
      </Grid>
      </div>
    </HashRouter>
    );
  }
}


ReactDOM.render(
  <PhotoShare />,
  document.getElementById('photoshareapp'),
);
