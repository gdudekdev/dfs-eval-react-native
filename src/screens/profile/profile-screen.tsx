import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../theme';

export const ProfileScreen = () => (
  <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
    <View style={styles.container}>
      <Text style={styles.text}>Profil</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.screen,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
  },
});