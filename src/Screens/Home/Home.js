import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomHeader from '../../Components/CustomHeader';
import Text from '../../Components/Text';
import InputField from '../../Components/InputField';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomButton from '../../Components/CustomButton';

export default function Home({navigation}) {
  const icon1 = (
    <Icon name="my-location" size={styles.iconSize} color={styles.iconColor} />
  );
  const icon2 = (
    <Icon name="location-pin" size={styles.iconSize} color={styles.iconColor} />
  );
  return (
    <View style={styles.mainContainer}>
      <CustomHeader />
      <View style={styles.fieldsContainer}>
        <Text style={styles.text}>Where you want to go?</Text>
        <InputField placeholder="Current location" leftIcon={icon1} />
        <InputField placeholder="Choose your destination" leftIcon={icon2} />
      </View>
      <MapView
        style={styles.mapContainer}
        provider={PROVIDER_GOOGLE}
        showsMyLocationButton={true}
        showsUserLocation={true}
        showsCompass={true}
        initialRegion={{
          latitude: 31.492234,
          longitude: 74.336772,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* <Marker coordinate={{latitude: 31.492234, longitude: 74.336772}}>
          <Text style={styles.marker}>Map Marker</Text>
        </Marker> */}
      </MapView>
      <CustomButton
        onpress={() => navigation.navigate('ChooseRide')}
        title="Confirm Pickup"
        style={styles.buttonContainer}
        textStyle={styles.buttonText}
      />
    </View>
  );
}
