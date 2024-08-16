import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  mainContainer: {
    //backgroundColor: 'blue',
    height: hp(100),
    width: wp(100),
  },
  topText: {
    color: 'black',
    fontSize: wp(8),
    fontWeight: '700',
    marginTop: hp(30),
    marginHorizontal: wp(20),
    textAlign: 'center',
  },
  centerText: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginHorizontal: wp(10),
    marginTop: wp(5),
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: wp(45),
  },
  bottomContainer: {
    height: hp(8),
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },

  underlineText: {
    textDecorationLine: 'underline',
  },
  bottomText: {
    fontWeight: '500',
  },
});
