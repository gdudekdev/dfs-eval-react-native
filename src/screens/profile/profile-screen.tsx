import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, layout, spacing} from '../../theme';
import {
  InfoItem,
  InfoList,
  MotivationCard,
  ProfileCard,
  ProfileHeader,
} from './components';
import {PROFILE} from './data';

export const ProfileScreen = () => {
  const infos: InfoItem[] = [
    {icon: 'bullseye-arrow', label: 'Objectif principal', value: PROFILE.mainGoal},
    {
      icon: 'scale-bathroom',
      label: 'Objectif de poids',
      value: `${PROFILE.targetWeight} kg`,
    },
    {
      icon: 'run-fast',
      label: 'Activité favorite',
      value: PROFILE.favoriteActivity,
    },
    {icon: 'chart-bar', label: 'Niveau sportif', value: PROFILE.level},
  ];

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <View style={styles.inner}>
          <ProfileHeader />
          <ProfileCard profile={PROFILE} />
          <InfoList items={infos} />
          <MotivationCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.screen,
  },
  content: {
    flexGrow: 1,
  },
  inner: {
    width: '100%',
    maxWidth: layout.maxContentWidth,
    alignSelf: 'center',
    padding: spacing.lg,
  },
});
