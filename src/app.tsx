import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootNavigator} from './navigation';

const App = () => (
  <SafeAreaProvider>
    <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
