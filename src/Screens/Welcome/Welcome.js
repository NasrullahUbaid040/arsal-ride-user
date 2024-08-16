import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Text from '../../Components/Text';
import styles from './styles';
import InputField from '../../Components/InputField';
import SocialButton from '../../Components/SocialButton';
import CustomButton from '../../Components/CustomButton';
import FbButton from '../../Components/FbButton';

export default function Welcome({navigation}) {
  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      <View style={styles.topContainer}>
        <Text style={styles.topText1}>Welcome to RIDES.</Text>
        <Text style={styles.topText2}>Let’s get acquainted.</Text>
      </View>
      <View style={styles.fieldsContainer}>
        <Text>Name</Text>
        <InputField placeholder="First" />
        <InputField placeholder="Last" />
        <Text>E-mail</Text>
        <InputField placeholder="" />
      </View>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <View>
          <Text style={styles.dividerText}> or sign in with social </Text>
        </View>
        <View style={styles.divider} />
      </View>
      <View style={styles.socialContainer}>
        <SocialButton title="Google" image="" />
        <FbButton title="Facebook" />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Next"
          onpress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}> Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('EnterNumber')}>
          <Text style={styles.underlineText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
