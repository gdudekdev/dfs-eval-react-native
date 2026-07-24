import {StyleSheet, View} from 'react-native';
import {SectionTitle} from '../../../components';
import {spacing} from '../../../theme';
import {InfoRow} from './info-row';

export type InfoItem = {
  icon: string;
  label: string;
  value: string;
};

export const InfoList = ({items}: {items: InfoItem[]}) => (
  <View style={styles.container}>
    <SectionTitle>Mes informations</SectionTitle>
    {items.map(item => (
      <InfoRow
        key={item.label}
        icon={item.icon}
        label={item.label}
        value={item.value}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.xl,
  },
});