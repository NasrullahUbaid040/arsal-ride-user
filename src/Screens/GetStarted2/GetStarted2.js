import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import styles from './styles';
import Text from '../../Components/Text';
import GsButton from '../../Components/GsButton';

export default function GetStarted2({navigation}) {
  return (
    <View>
      <ImageBackground
        source={require('../../../Assets/Images/background.png')}
        style={styles.image}>
        <Text style={styles.topText}>SHARE YOUR LOCATION</Text>
        <Text style={styles.centerText}>
          Get best travel experience from your comfort zone to anywhere in the
          world
        </Text>
        <Image
          source={require('../../../Assets/Icons/location.png')}
          style={styles.locationLogo}
        />
        <GsButton
          title={'GET STARTED'}
          onpress={() => navigation.navigate('EnterNumber')}
        />
      </ImageBackground>
    </View>
  );
}
