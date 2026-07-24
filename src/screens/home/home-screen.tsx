import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, layout, palette, spacing} from '../../theme';
import {
  ErrorState,
  GoalsSection,
  HomeHeader,
  LoadingState,
  StatsSection,
} from './components';
import {useHomeData} from './hooks';

export const HomeScreen = () => {
  const {status, data, refreshing, reload, refresh} = useHomeData();

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.body}>
        {status === 'loading' && <LoadingState />}
        {status === 'error' && <ErrorState onRetry={reload} />}
        {status === 'success' && data && (
          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={refresh}
                tintColor={palette.green.accent}
                colors={[palette.green.accent]}
              />
            }>
            <View style={styles.inner}>
              <HomeHeader />
              <StatsSection stats={data.stats} />
              <GoalsSection goals={data.goals} />
            </View>
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
    flexGrow: 1,
  },
  inner: {
    width: '100%',
    maxWidth: layout.maxContentWidth,
    alignSelf: 'center',
    padding: spacing.lg,
  },
});