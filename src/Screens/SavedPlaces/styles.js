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
    // marginTop:
    // backgroundColor: 'red',
  },
  fieldsContainer: {
    margin: wp(5),
    // backgroundColor: 'yellow',
    // alignSelf: 'center',
    marginBottom: wp(2),
  },
  iconSize: 15,
  iconColor: '#C2C2C2',
  text: {
    fontWeight: '700',
    fontSize: wp(8),
    marginBottom: wp(5),
  },
  separator: {height: 10},
  empty: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 200,
  },
  footer: {marginBottom: 300},
  bottomContainer: {
    // flexDirection: 'column',
    // marginHorizontal: wp(5),
    // backgroundColor: 'yellow',
    height: hp(20),
    width: wp(100),
  },
  text: {
    marginLeft: wp(5),
    fontSize: 17,
    marginBottom: wp(5),
  },
});
