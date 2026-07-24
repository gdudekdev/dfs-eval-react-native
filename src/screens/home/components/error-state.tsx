import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, palette, radius, spacing} from '../../../theme';

export const ErrorState = ({onRetry}: {onRetry: () => void}) => (
  <View style={styles.container}>
    <MaterialCommunityIcons
      name="cloud-off-outline"
      size={52}
      color={colors.textMuted}
      accessibilityElementsHidden
      importantForAccessibility="no"
    />
    <Text style={styles.title}>
      Impossible de récupérer vos données sportives.
    </Text>
    <Text style={styles.message}>Vérifiez votre connexion et réessayez.</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={onRetry}
      accessibilityRole="button"
      accessibilityLabel="Réessayer">
      <Text style={styles.buttonText}>Réessayer</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    gap: spacing.sm,
  },
  title: {
    marginTop: spacing.sm,
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  message: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  button: {
    marginTop: spacing.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.md,
    backgroundColor: palette.green.accent,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});