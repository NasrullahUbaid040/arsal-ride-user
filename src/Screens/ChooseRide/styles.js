import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  image: {
    height: hp(100),
    width: wp(100),
  },
  mainContainer: {
    alignItems: 'center',
  },
  mapContainer: {
    borderRadius: wp(2),
    overflow: 'hidden',
    marginVertical: wp(7),
  },
  map: {
    overflow: 'hidden',
    height: hp(41),
    width: wp(85),
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: wp(50),
  },
  buttonText: {
    color: 'black',
  },
});
