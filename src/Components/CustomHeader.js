import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Text from '../Components/Text';
import {useNavigation} from '@react-navigation/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function CustomHeader({
  style,
  hideDivider,
  headerTitle,
  blackHeader,
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
        <View style={styles.leftIconHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../Assets/Icons/Back.png')}
              style={[
                styles.leftIcon,
                {tintColor: blackHeader ? 'white' : 'black'},
              ]}
            />
          </TouchableOpacity>
          {headerTitle && <Text style={styles.headerText}>{headerTitle}</Text>}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../../Assets/Icons/menu.png')}
            resizeMode="contain"
            style={[
              styles.rightIcon,
              {tintColor: blackHeader ? 'white' : 'black'},
            ]}
          />
        </TouchableOpacity>
      </View>
      {!hideDivider && (
        <View style={[styles.dividerContainer, styles.shadowProp]}></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  iconContainer: {
    height: hp(11),
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dividerContainer: {
    height: wp(0.1),
    width: wp(100),
    backgroundColor: 'white',
  },
  shadowProp: {
    elevation: 5,
    borderColor: 'transparent',
    borderWidth: wp(0.2),
  },
  leftIcon: {
    height: wp(7),
    width: wp(7),
    tintColor: 'black',
  },
  leftIconHeader: {
    flexDirection: 'row',
  },
  headerText: {
    fontSize: wp(5),
    marginHorizontal: wp(3),
    fontWeight: '600',
  },
  rightIcon: {
    height: wp(8),
    width: wp(8),
    resizeMode: 'contain',
  },
});
