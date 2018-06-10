import '../assets/css/App.css';
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class App extends React.Component {
  render() {
    return (
      <div>
        <div style={styles.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                className={styles.menuButton}
                color="inherit"
                aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" style={styles.flex}>
                Title
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
        <h1>POGI NI ARQUI!</h1>
        <Button variant="contained"> Hello! </Button>
      </div>
    );
  }
}

export default App;
