import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

export default function Splash() {
  return (
    <View style={styles.back}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../../Assets/Icons/splash.png')}
        />
      </View>
    </View>
  );
}
