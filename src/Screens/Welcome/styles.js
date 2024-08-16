import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  mainContainer: {
    width: wp(90),
    height: hp(100),
    alignSelf: 'center',
  },
  topContainer: {
    height: hp(26),
    width: wp(90),
    justifyContent: 'center',
  },
  topText1: {
    fontSize: wp(8),
    fontWeight: '700',
    alignSelf: 'center',
  },
  topText2: {
    alignSelf: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  fieldsContainer: {
    width: wp(85),
    alignSelf: 'center',
  },
  dividerContainer: {
    width: wp(87),
    alignSelf: 'center',
    height: hp(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    height: wp(0.2),
    width: wp(25),
    backgroundColor: 'black',
    marginHorizontal: hp(0.5),
  },
  dividerText: {
    fontSize: hp(1.6),
  },
  socialContainer: {
    width: wp(86),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    marginVertical: wp(7),
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: wp(17),
  },

  underlineText: {
    textDecorationLine: 'underline',
  },
  bottomText: {
    fontWeight: '500',
  },
});
