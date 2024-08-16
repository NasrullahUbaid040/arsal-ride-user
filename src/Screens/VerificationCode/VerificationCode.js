import {
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Keyboard,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Text from '../../Components/Text';
import CustomButton from '../../Components/CustomButton';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

export default function VerificationCode({navigation}) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const CELL_COUNT = 4;

  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <Text style={styles.topText}>Verification Code</Text>
      <Text style={styles.centerText}>
        We’ve sent the 5 digit verification code to your mobile number{' '}
      </Text>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>+92 333 123 456 7 </Text>
        <View style={styles.editIcon}>
          <Image source={require('../../../Assets/Icons/Edit.png')} />
        </View>
      </View>
      <View>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Continue"
          onpress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={styles.bottomContainer1}>
        <Text> Didn’t recieve any code? </Text>
        <TouchableOpacity>
          <Text style={styles.underlineText2}>Request again.</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer2}>
        <Text style={styles.bottomText2}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.underlineText1}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
