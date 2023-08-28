import React from 'react';
import Routes from './src/Routes/Routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/utils/theme';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
