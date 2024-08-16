import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  image: {
    height: hp(100),
    width: wp(100),
    // zIndex: -1,
  },
  bottomContainer: {
    height: hp(50),
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: wp(5),
  },

  headerText: {
    color: 'white',
    fontSize: wp(7),
    fontWeight: '600',
    marginLeft: wp(5),
  },
  imageContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
  button: {
    width: wp(60),
    borderRadius: 30,
    marginVertical: wp(5),
  },
  selectedCard: {
    height: hp(10),
    width: wp(90),
    backgroundColor: 'black',
    borderRadius: 25,
    flexDirection: 'row',
    marginBottom: wp(3),
  },
  unselectedCard: {
    height: hp(10),
    width: wp(90),
    backgroundColor: '#F6F6F6',
    borderRadius: 25,
    flexDirection: 'row',
    marginBottom: wp(3),
  },
  bottomContainerF: {
    height: hp(40),
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: 'white',
    // justifyContent: 'center',
    alignItems: 'center',
  },

  sheetHeaderTextF: {
    fontWeight: '600',
    fontSize: wp(5),
    marginVertical: wp(4),
  },
  innerCardF: {
    width: wp(85),
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    borderRadius: 20,
    paddingVertical: wp(5),
    marginVertical: wp(3),
  },

  leftContainerF: {
    width: wp(20),
  },
  rightContainerF: {
    width: wp(65),
    marginTop: wp(-1.5),
  },
  inputFieldF: {
    width: wp(60),
    height: hp(4.5),
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    color: 'black',
  },
  smallTextF: {
    fontSize: wp(3),
    color: 'gray',
  },
  fieldIconsF: {
    height: wp(30),
    width: wp(20),
  },
  buttonF: {
    width: wp(60),
    borderRadius: 30,
    marginVertical: wp(2),
  },
  innerCardW: {
    width: wp(85),
    backgroundColor: '#F6F6F6',
    flexDirection: 'column',
    borderRadius: 15,
    marginVertical: wp(5),
  },
  topContainerW: {
    width: wp(85),
    flexDirection: 'row',
    marginVertical: wp(4),
  },
  bottomContainerW: {
    width: wp(85),
    flexDirection: 'row',
    height: hp(6),
    borderTopColor: '#D3D3D3',
    borderTopWidth: wp(0.2),
  },
  topLeftW: {
    width: wp(20),
  },
  topCenterW: {
    width: wp(35),
  },
  topRightW: {
    width: wp(30),
    justifyContent: 'center',
  },
  bottomLeftW: {
    width: wp(42.5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: wp(0.2),
    borderRightColor: '#D3D3D3',
  },
  bottomRightW: {
    width: wp(42.5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    height: wp(15),
    width: wp(15),
    marginHorizontal: wp(3),
  },
  carNumberW: {
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp(4),
    marginHorizontal: wp(4),
    height: hp(3),
    // textAlign: 'center',
  },
  iconW: {
    height: wp(6),
    width: wp(6),
    marginHorizontal: wp(2),
  },
  nameTextW: {
    fontWeight: '600',
    fontSize: wp(4.5),
  },
  carTextW: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: wp(3.5),
  },
  innerCardC: {
    width: wp(85),
    height: hp(20),
    backgroundColor: '#F6F6F6',
    borderRadius: 15,
    justifyContent: 'center',
    marginVertical: wp(5),
  },
  yesButtonC: {
    backgroundColor: '#535554',
    borderRadius: 20,
    paddingHorizontal: wp(9),
    paddingVertical: wp(2),
  },
  noButtonC: {
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    paddingHorizontal: wp(10),
    paddingVertical: wp(2),
  },
  bottomContainerC: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: wp(5),
  },
  questionText: {
    fontWeight: '300',
    fontSize: wp(4.5),
    textAlign: 'center',
  },
  underlineText: {
    textDecorationLine: 'underline',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  yesTextC: {
    color: 'white',
  },
});
