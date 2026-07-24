import {StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {radius} from '../theme';

type IconBadgeProps = {
  name: string;
  color: string;
  background: string;
  size?: number;
};

export const IconBadge = ({name, color, background, size = 26}: IconBadgeProps) => (
  <View style={[styles.badge, {backgroundColor: background}]}>
    <MaterialCommunityIcons name={name} size={size} color={color} />
  </View>
);

const styles = StyleSheet.create({
  badge: {
    width: 52,
    height: 52,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
