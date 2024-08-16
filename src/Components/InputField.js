import {StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Input} from '@rneui/themed';

export default function InputField({
  placeholder,
  rightIcon,
  leftIcon,
  secureTextEntry,
  styleC,
  styleI,
  styleT,
}) {
  return (
    <Input
      style={[styles.textStyle, styleT]}
      placeholder={placeholder}
      containerStyle={[styles.containerStyle, styleC]}
      inputContainerStyle={[styles.inputStyle, styleI]}
      rightIcon={rightIcon}
      leftIcon={leftIcon}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    height: hp(6),
    backgroundColor: '#EAEAEA',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: wp(2),
  },
  textStyle: {
    fontSize: hp(2),
    fontWeight: '300',
  },
  inputStyle: {
    borderWidth: 0,
    borderColor: 'transparent',
  },
});
