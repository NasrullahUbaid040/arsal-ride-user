import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Text from '../Components/Text';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
export default function GsButton({title, onpress}) {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onpress}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{title}</Text>
          <Image
            source={require('../../Assets/Icons/arrow.png')}
            style={styles.buttonImage}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    height: hp(7),
    width: wp(58),
    borderRadius: 15,
    backgroundColor: '#00000080',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: hp(2),
    color: 'white',
    paddingLeft: wp(5),
    fontWeight: '400',
  },
  buttonImage: {
    height: wp(3),
    width: wp(3),
    resizeMode: 'contain',
    marginHorizontal: wp(3),
    alignSelf: 'center',
  },
});
