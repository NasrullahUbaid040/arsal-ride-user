import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  emptyContainer: {
    height: hp(30),
    width: wp(90),
  },
  mainContainer: {
    width: wp(89),
    height: hp(100),
    alignSelf: 'center',
  },
  topContainer: {
    height: hp(12),
    width: wp(90),
    justifyContent: 'center',
    marginTop: wp(2),
  },
  topText1: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: wp(8),
    fontWeight: '700',
    alignSelf: 'center',
    marginVertical: wp(1),
  },
  topText2: {
    justifyContent: 'center',
    textAlign: 'center',
    marginVertical: hp(3),

    width: wp(85),
    alignSelf: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  fieldsContainer: {
    width: wp(85),
    height: hp(17),
    alignSelf: 'center',
    marginVertical: hp(2),
  },
  iconSize: 15,
  iconColor: 'rgba(0, 0, 0, 0.25)',
});
