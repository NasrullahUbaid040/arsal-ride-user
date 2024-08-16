import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function CustomText(props) {
  return (
    <View>
      <Text
        allowFontScaling={false}
        numberOfLines={props.numberOfLines ?? null}
        style={[styles.mainText, props.style]}>
        {props.children}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  mainText: {
    color: 'black',
  },
});
