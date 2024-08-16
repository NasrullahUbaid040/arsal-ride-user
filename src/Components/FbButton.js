import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import Text from '../Components/Text';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function FbButton({title}) {
  return (
    <View>
      <TouchableOpacity style={styles.mainContainer}>
        <View style={styles.innerContainer}>
          <Image
            source={require('../../Assets/Icons/fb.png')}
            style={styles.icon}
          />

          <Text style={styles.buttonText}>{title} </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: hp(6),
    width: wp(42),
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    marginVertical: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    marginVertical: wp(2),
    fontWeight: '500',
    marginHorizontal: wp(2),
  },
  innerContainer: {
    flexDirection: 'row',
  },
  icon: {
    height: hp(3.5),
    width: hp(3.5),
    alignSelf: 'center',
  },
});
