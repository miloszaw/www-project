import React from 'react';
import {
  AppBar, Toolbar, Typography
} from '@material-ui/core';
import './TopBar.css';

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
              <a href="#/" className={"topBarTitle"}>Milosz A. Wudarczyk&#39;s Awesome App</a>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
