import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  mainContainer: {
    height: hp(10),
    backgroundColor: 'red',
  },
  msgContainer: {
    backgroundColor: 'red',
  },
});
