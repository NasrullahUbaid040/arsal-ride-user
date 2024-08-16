import {TouchableOpacity, View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import Text from '../../Components/Text';
import NumField from '../../Components/NumField';
import CustomButton from '../../Components/CustomButton';

export default function Verification({navigation}) {
  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <Text style={styles.topText}>Enter your mobile number</Text>
      <Text style={styles.centerText}>
        We’ll text you a verification code. Message and data rates may apply.
      </Text>
      <NumField />
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Request OTP"
          onpress={() => navigation.navigate('EnterCode')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Already have an account? </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.underlineText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
