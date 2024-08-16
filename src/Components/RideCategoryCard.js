import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Text from '../Components/Text';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function RideCategoryCard({data, onpress, selectedValue}) {
  return (
    <TouchableOpacity
      style={[styles.unselectedCard, selectedValue && styles.selectedCard]}
      onPress={onpress}>
      <View style={styles.leftContainer}>
        <Image
          source={require('../../Assets/Icons/car.png')}
          style={styles.car}
        />
      </View>
      <View style={styles.centerContainer}>
        <Text
          style={[
            styles.unselectedCarText,
            selectedValue && styles.selectedCarText,
          ]}>
          {data?.carName}
        </Text>
        <Text style={styles.timeText}>04:56 PM Drop Off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.pkrText}>PKR</Text>
        <Text
          style={[
            styles.unselectedPriceText,
            selectedValue && styles.selectedPriceText,
          ]}>
          {data.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  selectedCard: {
    backgroundColor: 'black',
  },
  unselectedCard: {
    height: hp(10),
    width: wp(90),
    backgroundColor: '#F6F6F6',
    borderRadius: 25,
    flexDirection: 'row',
    marginBottom: wp(3),
  },
  leftContainer: {
    width: wp(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContainer: {
    width: wp(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    width: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  car: {
    height: wp(23),
    width: wp(28),
  },
  selectedCarText: {
    color: 'white',
  },
  unselectedCarText: {
    fontWeight: '700',
    fontSize: wp(4),
  },
  timeText: {
    fontWeight: '400',
    fontSize: wp(3),
    color: '#535554',
  },
  pkrText: {
    fontWeight: '400',
    fontSize: wp(3.5),
    color: '#535554',
  },
  selectedPriceText: {
    color: 'white',
  },
  unselectedPriceText: {
    fontWeight: '700',
    fontSize: wp(5),
  },
});
