import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  mainContainer: {
    height: hp(100),
    width: wp(100),
  },
  headerContainer: {
    flex: 1,
  },
  bottomContainer: {
    backgroundColor: '#E5E5E5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  picContainer: {
    height: hp(18),
    // width: wp(100),
    alignItems: 'center',
    marginTop: hp(-12),
  },
  image: {
    height: hp(17),
    width: hp(17),
  },
  nameText: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
  },
  underlineText: {
    textDecorationLine: 'underline',
    alignSelf: 'center',
    color: '#535554',
  },
  listContainer: {
    height: hp(30),
    // justifyContent: 'center',
    // alignSelf: 'center',
    marginVertical: wp(5),
  },
  listComponent: {
    height: hp(5),
    width: wp(100),
    justifyContent: 'center',
    marginLeft: wp(15),
    marginVertical: wp(1),
  },
  listComponentText: {
    fontSize: wp(6),
    fontWeight: '600',
  },
  cardContainer: {
    alignItems: 'center',
  },
  logoutContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: wp(5),
  },
  logoutIcon: {
    height: hp(3.3),
    width: hp(3),
  },
  touchable: {
    flexDirection: 'row',
  },
  logoutText: {
    fontWeight: '600',
    marginHorizontal: wp(2),
    fontSize: wp(4.5),
  },
});
