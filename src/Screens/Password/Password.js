import {
  View,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Text from '../../Components/Text';
import styles from './styles';
import InputField from '../../Components/InputField';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../Components/CustomButton';

export default function Password() {
  const myIcon1 = (
    <Icon name="eye" size={styles.iconSize} color={styles.iconColor} />
  );
  const myIcon2 = (
    <Icon name="eye-slash" size={styles.iconSize} color={styles.iconColor} />
  );
  const renderEye1 = () => {
    return (
      <TouchableOpacity onPress={() => setEye1(!eye1)}>
        {eye1 ? myIcon1 : myIcon2}
      </TouchableOpacity>
    );
  };
  const renderEye2 = () => {
    return (
      <TouchableOpacity onPress={() => setEye2(!eye2)}>
        {eye2 ? myIcon1 : myIcon2}
      </TouchableOpacity>
    );
  };
  const [eye1, setEye1] = useState(true);
  const [eye2, setEye2] = useState(true);
  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      <View style={styles.emptyContainer} />
      <View style={styles.topContainer}>
        <Text style={styles.topText1}>Enter your Password</Text>
        <Text style={styles.topText2}>
          We’ll text you a verification code. Message and data rates may apply.
        </Text>
      </View>
      <View style={styles.fieldsContainer}>
        <InputField placeholder="Enter your password" rightIcon={renderEye1} />
        <InputField
          placeholder="Confirm your password"
          rightIcon={renderEye2}
        />
      </View>
      <CustomButton title="Next" />
    </ScrollView>
  );
}
