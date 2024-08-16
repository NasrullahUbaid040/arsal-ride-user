import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function SavedPlace() {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View style={styles.iconContainer}>
        <Icon name="my-location" size={20} color="white" style={styles.icon} />
      </View>
      <Text style={styles.text}>Destination</Text>
      <Text style={styles.duration}>0 min</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: wp(30),
    width: wp(30),
    backgroundColor: '#F1F1F1',
    borderRadius: 30,
    justifyContent: 'center',
    marginLeft: wp(5),
  },
  iconContainer: {
    backgroundColor: '#535554',
    height: wp(11),
    width: wp(11),
    borderRadius: 30,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    alignSelf: 'center',
    marginVertical: wp(1),
  },
  duration: {
    color: '#C2C2C2',
    alignSelf: 'center',
    fontSize: wp(3),
  },
  icon: {
    alignSelf: 'center',
  },
});
