import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import Text from '../Components/Text';

export default function CustomButton({title, style, textStyle, onpress}) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.buttonContainer, style]}
        onPress={onpress}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: hp(6),
    width: wp(85),
    backgroundColor: '#535554',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: hp(2),
  },
});
