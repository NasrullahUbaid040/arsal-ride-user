import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {CountryPicker, CountryList} from 'react-native-country-codes-picker';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function NumField() {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.pickerContainer}
          onPress={() => setShow(true)}>
          <CountryPicker
            show={show}
            style={{
              modal: {
                height: 500,
              },
            }}
            onBackdropPress={() => setShow(false)}
            pickerButtonOnPress={item => {
              setCountryCode(item.dial_code);
              setShow(false);
            }}
          />
          <Image
            source={require('../../Assets/Icons/Dropdown.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <View style={styles.divider} />
        <TextInput placeholder="Your number" keyboardType="numeric">
          <Text
            style={{
              color: 'black',
              fontSize: hp(2),
              alignSelf: 'center',
              marginTop: wp(4),
            }}>
            {countryCode}
          </Text>
        </TextInput>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: hp(7),
    width: wp(85),
    backgroundColor: '#EAEAEA',

    alignItems: 'center',
    borderRadius: 20,
    margin: wp(7),
    flexDirection: 'row',
  },
  pickerContainer: {
    height: hp(7),
    width: wp(20),
    borderRadius: 20,
    justifyContent: 'center',
  },
  divider: {
    height: hp(4),
    width: wp(0.2),
    backgroundColor: 'black',
    marginRight: wp(3),
  },
  buttonImage: {
    alignSelf: 'center',
    height: hp(0.7),
    width: wp(3),
    marginLeft: wp(12),
  },
});
