import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Text from '../Components/Text';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import StarRating from 'react-native-star-rating-widget';

export default function TripCard() {
  const [rating, setRating] = useState(1);
  return (
    <View style={styles.mainContainer}>
      <MapView
        style={styles.topContainer}
        scrollEnabled={false}
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
      <View style={styles.bottomContainer}>
        <View style={styles.leftContainer}>
          <View
            style={{
              flexDirection: 'row',
              width: wp(30),
            }}>
            <Text numberOfLines={1} style={styles.cityText}>
              Greenwich
            </Text>
            <Text numberOfLines={1} style={styles.toText}>
              {' '}
              to{' '}
            </Text>
            <Text numberOfLines={1} style={styles.cityText}>
              Brooklyn
            </Text>
          </View>
          <Text style={styles.carText}>Toyota Yaris</Text>
          <StarRating
            rating={rating}
            onChange={value => setRating(value)}
            maxStars={5}
            starSize="23"
          />
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.dateText}>29 July,2022.</Text>
          <Text style={styles.priceText}>PKR 530.25</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: hp(22),
    width: wp(85),
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: wp(2),
  },
  topContainer: {
    height: hp(13),
  },
  bottomContainer: {
    height: hp(9),
    backgroundColor: '#535554',
    flexDirection: 'row',
    paddingHorizontal: wp(2),
  },
  leftContainer: {
    width: wp(50),
  },
  rightContainer: {
    width: wp(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    color: 'rgba(255, 255, 255, 0.75)',
  },
  priceText: {
    color: 'white',
    fontSize: wp(5),
    fontWeight: '600',
  },
  cityText: {
    color: 'white',
    fontSize: wp(4),
  },
  toText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: wp(4),
  },
  carText: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
});
