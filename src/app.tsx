import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeScreen} from './screens/home';

const App = () => (
  <SafeAreaProvider>
    <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
    <HomeScreen />
  </SafeAreaProvider>
);

export default App;
