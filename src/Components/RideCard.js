import {View, StyleSheet, Image, TextInput} from 'react-native';
import React from 'react';
import Text from '../Components/Text';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import InputField from './InputField';

export default function RideCard() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>Confirm your Route</Text>
      <View style={styles.bottomContainer}>
        <View style={styles.leftContainer}>
          <Image
            source={require('../../Assets/Icons/locationBar.png')}
            resizeMode="contain"
            style={styles.fieldIcons}
          />
        </View>
        <View style={styles.rightContainer}>
          <View>
            <Text style={styles.smallText}>From</Text>
            <TextInput style={styles.inputField} />
          </View>
          <View style={{marginTop: wp(2)}}>
            <Text style={styles.smallText}>To</Text>
            <TextInput style={styles.inputField} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: hp(27),
    backgroundColor: 'black',
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: wp(3),
  },
  headerText: {
    fontSize: wp(7),
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: wp(6),
  },
  bottomContainer: {
    width: wp(85),
    flexDirection: 'row',
  },
  fieldIcons: {
    height: wp(27),
    width: wp(20),
  },
  leftContainer: {
    width: wp(20),
  },
  rightContainer: {
    width: wp(65),
    marginTop: wp(-1.5),
  },
  inputField: {
    width: wp(60),
    height: hp(4.5),
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
  },
  smallText: {
    fontSize: wp(3),
    color: 'gray',
  },
});
