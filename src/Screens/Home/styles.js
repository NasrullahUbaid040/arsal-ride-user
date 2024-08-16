import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  mainContainer: {
    height: hp(100),
    width: wp(100),
  },
  fieldsContainer: {
    margin: wp(5),
    marginBottom: wp(2),
  },
  iconSize: 15,
  iconColor: 'black',
  text: {
    fontWeight: '700',
    fontSize: wp(8),
    marginBottom: wp(7),
  },
  mapContainer: {
    height: hp(60),
    zIndex: -1,
  },
  marker: {
    fontSize: hp(2.4),
    backgroundColor: 'red',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: 'white',
    width: wp(50),
    borderRadius: 20,
  },
  buttonText: {
    color: 'black',
  },
});
