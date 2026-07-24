import {StyleSheet, Text, View} from 'react-native';
import {IconBadge} from '../../../../components';
import {AccentColor, colors, radius, spacing} from '../../../../theme';

type StatCardProps = {
  icon: string;
  value: string;
  unit: string;
  caption: string;
  color: AccentColor;
};

export const StatCard = ({icon, value, unit, caption, color}: StatCardProps) => (
  <View
    style={styles.card}
    accessible
    accessibilityLabel={`${value} ${unit}, ${caption}`}>
    <IconBadge name={icon} color={color.accent} background={color.tint} />
    <Text style={[styles.value, {color: color.accent}]}>{value}</Text>
    <Text style={styles.unit}>{unit}</Text>
    <Text style={styles.caption}>{caption}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.lg,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  value: {
    marginTop: spacing.sm,
    fontSize: 20,
    fontWeight: '800',
  },
  unit: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.textSecondary,
  },
  caption: {
    marginTop: spacing.xs,
    fontSize: 11,
    color: colors.textMuted,
    textAlign: 'center',
  },
});