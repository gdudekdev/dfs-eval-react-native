import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, palette, spacing} from '../../../theme';

export const HomeHeader = () => (
  <View style={styles.container}>
    <View>
      <Text style={styles.title}>Goals</Text>
      <Text style={styles.subtitle}>Continuez vos efforts&nbsp;! 💪</Text>
    </View>
    <Ionicons
      name="person-circle-outline"
      size={34}
      color={palette.green.accent}
    />
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
    color: colors.textSecondary,
  },
});