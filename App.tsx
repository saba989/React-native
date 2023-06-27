import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Component/Home';
import Entry from './Component/Entry';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="HomeEntry"
                component={Home}
                options={{ title: 'Budget Entry' }}
              />
              <Stack.Screen
                name="HomeListing"
                component={Entry}
                options={{ title: 'Budget Entry Listing' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;