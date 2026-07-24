import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors, palette, radius, spacing} from '../../../theme';

export const MotivationCard = () => (
  <View style={styles.card}>
    <MaterialCommunityIcons name="trophy" size={44} color={palette.green.accent} />
    <View style={styles.texts}>
      <Text style={styles.title}>Continuez vos efforts&nbsp;!</Text>
      <Text style={styles.subtitle}>
        Chaque séance vous rapproche de vos objectifs.
      </Text>
    </View>
    <MaterialIcons name="chevron-right" size={24} color={palette.green.accent} />
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderRadius: radius.lg,
    backgroundColor: palette.green.tint,
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
  subtitle: {
    marginTop: 2,
    fontSize: 13,
    color: colors.textSecondary,
  },
});