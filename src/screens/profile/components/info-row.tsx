import {StyleSheet, Text, View} from 'react-native';
import {IconBadge} from '../../../components';
import {colors, palette, radius, spacing} from '../../../theme';

type InfoRowProps = {
  icon: string;
  label: string;
  value: string;
};

export const InfoRow = ({icon, label, value}: InfoRowProps) => (
  <View style={styles.row}>
    <IconBadge name={icon} color={palette.green.accent} background={palette.green.tint} />
    <View style={styles.texts}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderRadius: radius.lg,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
  },
  texts: {
    flex: 1,
    marginLeft: spacing.md,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  value: {
    marginTop: 2,
    fontSize: 13,
    color: colors.textSecondary,
  },
});