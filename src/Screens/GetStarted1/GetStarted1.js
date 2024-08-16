import * as React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import styles from './styles';
import Text from '../../Components/Text';
import GsButton from '../../Components/GsButton';

export default function GetStarted1({navigation}) {
  return (
    <ImageBackground
      source={require('../../../Assets/Images/background.png')}
      style={styles.image}>
      <Text style={styles.topText}>GET ANY PREMIUM RIDE IN A MINUTE</Text>
      <Text style={styles.centerText}>
        Get best travel experience from your comfort zone to anywhere in the
        world
      </Text>
      <Image
        source={require('../../../Assets/Icons/car.png')}
        style={styles.carLogo}></Image>
      <GsButton
        title={'GET STARTED'}
        onpress={() => navigation.navigate('GS2')}
      />
    </ImageBackground>
  );
}
