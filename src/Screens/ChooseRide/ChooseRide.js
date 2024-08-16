import {View, ImageBackground, Image} from 'react-native';
import React from 'react';
import Text from '../../Components/Text';
import styles from './styles';
import CustomHeader from '../../Components/CustomHeader';
import RideCard from '../../Components/RideCard';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomButton from '../../Components/CustomButton';

export default function ChooseRide({navigation}) {
  return (
    <ImageBackground
      source={require('../../../Assets/Icons/mapBack.png')}
      style={styles.image}>
      <CustomHeader blackHeader hideDivider />
      <View style={styles.mainContainer}>
        <RideCard style={styles.card} />
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            showsMyLocationButton={true}
            showsUserLocation={true}
            showsCompass={true}
            initialRegion={{
              latitude: 31.492234,
              longitude: 74.336772,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
        <CustomButton
          onpress={() => navigation.navigate('Ride')}
          title="Choose a Ride"
          style={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    </ImageBackground>
  );
}
