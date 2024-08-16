import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import Text from '../Components/Text';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

export default function CreditCard() {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1.5, y: 0.25}}
      //   locations={[0, 0.5, 0.6]}
      colors={['#535554', '#1D1D1D']}
      style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <View style={styles.chipContainer}>
          <Image source={require('../../Assets/Icons/chipR.png')} />
          <Image source={require('../../Assets/Icons/chip.png')} />
        </View>
        <Text style={styles.nameText}>RIDES.</Text>
      </View>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>1234 1234 1234 1234</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.upperContainer}>
            <Text style={styles.dateText}>Valid {`\n`} from</Text>
            <Text style={styles.date}>04/12</Text>
            <Text style={styles.dateText}>Expiry {`\n`} due</Text>
            <Text style={styles.date}>04/21</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image
              source={require('../../Assets/Icons/carArrow.png')}
              style={styles.iconCard}
            />
            <Text style={styles.cardName}>Chris Jordan</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.balanceText}>Balance</Text>
          <Text style={styles.priceText}>PKR 540</Text>
        </View>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    width: wp(85),
    borderRadius: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: wp(3),
  },
  chipContainer: {
    height: hp(4),
    width: wp(10),
    backgroundColor: '#FF9800',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: wp(2),
  },

  nameText: {
    color: 'white',
    fontSize: hp(4),
    fontWeight: '700',
  },
  numberContainer: {
    marginLeft: wp(5),
  },
  numberText: {
    color: 'white',
    fontSize: wp(5),
    fontWeight: '300',
    fontFamily: 'Raleway-Regular',
  },
  bottomContainer: {
    flexDirection: 'row',
  },
  leftContainer: {
    marginRight: wp(4),
    flexDirection: 'column',
    marginVertical: wp(3),
  },
  rightContainer: {
    width: wp(33),
    // backgroundColor: 'yellow',
    // height: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp(2),
  },
  upperContainer: {
    flexDirection: 'row',
  },
  dateText: {
    fontSize: wp(2),
    color: 'rgba(255, 255, 255, 0.35)',
    marginHorizontal: wp(5),
  },
  date: {
    color: 'white',
    fontSize: hp(1.5),
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: wp(2),
  },
  iconCard: {
    margin: wp(3),
    height: hp(1.8),
    width: hp(0.6),
  },
  cardName: {
    fontSize: wp(4),
    fontWeight: '300',
    color: 'white',
  },
  balanceText: {
    color: 'rgba(255, 255, 255, 0.35)',
    fontSize: wp(3.5),
  },
  priceText: {
    color: 'white',
    fontSize: wp(5),
  },
});
