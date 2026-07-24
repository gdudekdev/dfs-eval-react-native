import {StyleSheet, View} from 'react-native';
import {SectionTitle} from '../../../../components';
import {palette, spacing} from '../../../../theme';
import {Stats} from '../../../../api';
import {formatSpentTime} from '../../utils';
import {StatCard} from './stat-card';

export const StatsSection = ({stats}: {stats: Stats}) => (
  <View style={styles.container}>
    <SectionTitle>Mes statistiques</SectionTitle>
    <View style={styles.row}>
      <StatCard
        icon="shoe-sneaker"
        value={String(stats.sessions)}
        unit="séances"
        caption="Total réalisé"
        color={palette.green}
      />
      <StatCard
        icon="clock-outline"
        value={formatSpentTime(stats.spentTime)}
        unit="minutes"
        caption="Temps total"
        color={palette.blue}
      />
      <StatCard
        icon="fire"
        value={String(stats.kcal)}
        unit="kcal"
        caption="Calories brûlées"
        color={palette.orange}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.xl,
  },
  row: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
});