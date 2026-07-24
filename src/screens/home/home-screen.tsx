import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, spacing} from '../../theme';
import {
  ErrorState,
  GoalsSection,
  HomeHeader,
  LoadingState,
  StatsSection,
} from './components';
import {useHomeData} from './hooks';

export const HomeScreen = () => {
  const {status, data, reload} = useHomeData();

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.body}>
        {status === 'loading' && <LoadingState />}
        {status === 'error' && <ErrorState onRetry={reload} />}
        {status === 'success' && data && (
          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}>
            <HomeHeader />
            <StatsSection stats={data.stats} />
            <GoalsSection goals={data.goals} />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.screen,
  },
  body: {
    flex: 1,
  },
  content: {
    padding: spacing.lg,
  },
});