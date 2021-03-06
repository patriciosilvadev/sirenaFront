import React from 'react';
import './App.css';
import Layout, {
  Root
} from '@mui-treasury/layout';
import { StylesProvider, CssBaseline, createMuiTheme } from '@material-ui/core';
import { Route } from "wouter";
// VIEWS
import Inbox from './views/Inbox';
import Login from './views/Login';

const scheme = Layout();

scheme.configureHeader((builder) => {
  builder.registerConfig('xs', {
    position: 'fixed',
    clipped: true,
    initialHeight: 64,
  });
});

scheme.configureEdgeSidebar((builder) => {
  builder
    .create('primarySidebar', { anchor: 'left' })
    .registerPermanentConfig('xs', {
      width: 256,
      collapsible: true,
      collapsedWidth: 72,
    });

  builder
    .create('secondarySidebar', { anchor: 'right' })
    .registerPersistentConfig('sm', {
      width: 56,
      collapsible: false,
      persistentBehavior: 'fit',
    });
});

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#fff',
    },
  },
});

function App() {
  return (
    <StylesProvider injectFirst>
      <Root
        theme={theme}
        scheme={scheme}
        initialState={{
          sidebar: {
            primarySidebar: { collapsed: true },
            secondarySidebar: { open: true },
          },
        }}
      >
        <CssBaseline />
        <Route path="/" component={Login} />
        <Route path="/home" component={Inbox} />
      </Root>
    </StylesProvider>
  );
}

export default App;
