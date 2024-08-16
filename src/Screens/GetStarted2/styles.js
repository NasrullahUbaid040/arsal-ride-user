import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  image: {
    width: wp(100),
    height: hp(100),
  },
  topText: {
    color: 'black',
    fontSize: wp(10),
    fontWeight: '700',
    marginHorizontal: wp(20),
    marginBottom: wp(10),
    marginTop: wp(35),
  },
  centerText: {
    color: 'black',
    fontSize: wp(4),
    fontWeight: '400',
    marginHorizontal: wp(20),
  },
  locationLogo: {
    height: wp(75),
    width: wp(75),
    resizeMode: 'contain',
    marginHorizontal: wp(10),
  },
});
