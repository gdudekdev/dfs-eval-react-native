import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, palette, radius, spacing} from '../../../theme';
import {Profile} from '../data';

export const ProfileCard = ({profile}: {profile: Profile}) => (
  <View style={styles.card}>
    <View style={styles.avatar}>
      <Ionicons
        name="person"
        size={40}
        color={palette.green.accent}
        accessibilityElementsHidden
        importantForAccessibility="no"
      />
    </View>
    <View style={styles.info}>
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.description}>{profile.description}</Text>
      <View style={styles.editButton}>
        <MaterialCommunityIcons
          name="pencil-outline"
          size={16}
          color={palette.green.accent}
        />
        <Text style={styles.editText}>Modifier</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderRadius: radius.lg,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.xl,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: palette.green.tint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flex: 1,
    marginLeft: spacing.md,
  },
  name: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  description: {
    marginTop: 2,
    fontSize: 13,
    color: colors.textSecondary,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: spacing.sm,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: palette.green.accent,
    gap: spacing.xs,
  },
  editText: {
    fontSize: 13,
    fontWeight: '600',
    color: palette.green.accent,
  },
});