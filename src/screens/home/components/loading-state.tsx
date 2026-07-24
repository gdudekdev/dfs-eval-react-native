import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {colors, palette, spacing} from '../../../theme';

export const LoadingState = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={palette.green.accent} />
    <Text style={styles.text}>Chargement de votre activité…</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
  },
  text: {
    fontSize: 15,
    color: colors.textSecondary,
  },
});