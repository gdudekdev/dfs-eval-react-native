import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {IconBadge} from '../../../../components';
import {AccentColor, colors, radius, spacing} from '../../../../theme';

type GoalCardProps = {
  title: string;
  target: string;
  icon: string;
  color: AccentColor;
};

export const GoalCard = ({title, target, icon, color}: GoalCardProps) => (
  <View style={styles.card}>
    <IconBadge name={icon} color={color.accent} background={color.tint} />
    <View style={styles.texts}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.target}>{target}</Text>
    </View>
    <MaterialIcons name="chevron-right" size={24} color={colors.textMuted} />
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderRadius: radius.lg,
    marginBottom: spacing.sm,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  texts: {
    flex: 1,
    marginLeft: spacing.md,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  target: {
    marginTop: 2,
    fontSize: 13,
    color: colors.textSecondary,
  },
});