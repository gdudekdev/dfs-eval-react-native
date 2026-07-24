import {StyleSheet, View} from 'react-native';
import {SectionTitle} from '../../../../components';
import {palette, spacing} from '../../../../theme';
import {Goal} from '../../../../api';
import {GoalCard} from './goal-card';

//TODO recup les icons/colors pour les objectifs (rester coheremt )
const GOAL_STYLES = [
  {icon: 'bullseye-arrow', color: palette.green},
  {icon: 'run-fast', color: palette.orange},
  {icon: 'scale-bathroom', color: palette.blue},
  {icon: 'trophy-outline', color: palette.green},
];

export const GoalsSection = ({goals}: {goals: Goal[]}) => (
  <View style={styles.container}>
    <SectionTitle>Mes objectifs</SectionTitle>
    {goals.map((goal, index) => {
      const style = GOAL_STYLES[index % GOAL_STYLES.length];
      return (
        <GoalCard
          key={`${goal.title}-${index}`}
          title={goal.title}
          target={goal.target}
          icon={style.icon}
          color={style.color}
        />
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
});