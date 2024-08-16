import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  container: {
    height: hp(100),
    width: wp(100),
    backgroundColor: '#28282B',
  },
  mainContainer: {
    height: hp(100),
    width: wp(100),
    backgroundColor: '#28282B',
    alignItems: 'center',
  },
  mainTextContainer: {
    height: hp(14),
    justifyContent: 'center',
  },
  mainText: {
    fontSize: wp(7),
    fontWeight: '700',
    color: 'white',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: hp(18),
    width: hp(18),
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: hp(16.5),
    width: hp(16.5),
  },
  borderImage: {
    height: hp(22),
    width: hp(22),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: wp(0.5),
    borderColor: 'white',
    marginVertical: wp(2),
  },
  profileName: {
    color: 'white',
    fontSize: wp(5),
    fontWeight: '500',
    marginVertical: wp(1.5),
  },
  rateTextContainer: {
    height: hp(15),
    justifyContent: 'center',
  },
  rateText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: '400',
    // fontSize: wp(3.5),
  },
  firstButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    marginVertical: wp(3),
  },
  secondButton: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  firstText: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
  secondText: {
    color: 'black',
  },
});
