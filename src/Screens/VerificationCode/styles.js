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
    marginTop: wp(60),
    marginHorizontal: wp(10),
    textAlign: 'center',
  },
  centerText: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginHorizontal: wp(10),
    marginTop: wp(5),
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: wp(7),
  },
  bottomContainer1: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomContainer2: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(22),
  },

  underlineText1: {
    textDecorationLine: 'underline',
    fontWeight: '400',
  },
  underlineText2: {
    textDecorationLine: 'underline',
    fontWeight: '500',
  },

  bottomText2: {
    fontWeight: '500',
  },
  numberContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(2),
    flexDirection: 'row',
  },
  editIcon: {
    backgroundColor: '#535554',
    height: wp(4),
    width: wp(4),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp(1),
  },
  numberText: {
    fontWeight: '500',
  },

  codeFieldRoot: {
    marginHorizontal: wp(20),
  },
  cell: {
    width: wp(12),
    height: hp(6),
    lineHeight: 44,
    fontSize: 25,
    // borderWidth: wp(0.2),
    // borderColor: '#00000030',
    textAlign: 'center',
    backgroundColor: '#EAEAEA',
    borderRadius: 15,
  },
  focusCell: {
    borderColor: '#000',
    borderWidth: wp(0.5),
  },
});
