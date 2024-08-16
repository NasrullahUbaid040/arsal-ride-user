import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  mainContainer: {
    // height: hp(100),
    // backgroundColor: 'red',
  },
  emptyContainer: {
    height: hp(88),
    paddingTop: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyIcon: {
    height: hp(5),
    width: hp(5),
    alignSelf: 'center',
  },
  emptyText: {
    color: 'rgba(0, 0, 0, 0.75)',
    width: wp(50),
    textAlign: 'center',
    marginVertical: wp(3),
  },
});
