import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, palette, spacing} from '../../../theme';

export const ProfileHeader = () => (
  <View style={styles.container}>
    <View>
      <Text style={styles.title}>Goals</Text>
      <Text style={styles.subtitle}>Mon profil</Text>
    </View>
    <Ionicons name="settings-outline" size={26} color={palette.green.accent} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: palette.green.accent,
  },
  subtitle: {
    marginTop: spacing.xs,
    fontSize: 14,
    fontWeight: '700',
    color: colors.textSecondary,
  },
});