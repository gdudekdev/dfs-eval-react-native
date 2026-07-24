import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomeScreen} from '../screens/home';
import {ProfileScreen} from '../screens/profile';
import {colors, palette, spacing} from '../theme';

const Tab = createBottomTabNavigator();

export const RootNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: palette.green.accent,
      tabBarInactiveTintColor: colors.textSecondary,
      tabBarStyle: styles.tabBar,
      tabBarLabelStyle: styles.tabLabel,
    }}>
    <Tab.Screen
      name="Accueil"
      component={HomeScreen}
      options={{
        tabBarIcon: ({color, size, focused}) => (
          <Ionicons
            name={focused ? 'home' : 'home-outline'}
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profil"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({color, size, focused}) => (
          <Ionicons
            name={focused ? 'person' : 'person-outline'}
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const styles = {
  tabBar: {
    borderTopColor: colors.border,
    height: 64,
    paddingTop: spacing.xs,
    paddingBottom: spacing.sm,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '600' as const,
  },
};