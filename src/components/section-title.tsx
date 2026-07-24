import {StyleSheet, Text} from 'react-native';
import {colors, spacing} from '../theme';

export const SectionTitle = ({children}: {children: string}) => (
  <Text style={styles.title}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
});