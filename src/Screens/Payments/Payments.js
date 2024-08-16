import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomHeader from '../../Components/CustomHeader';
import CreditCard from '../../Components/CreditCard';

export default function Payments() {
  return (
    <View>
      <CustomHeader headerTitle={'Payments'} />
      <View style={styles.cardContainer}>
        <CreditCard />
      </View>
    </View>
  );
}
