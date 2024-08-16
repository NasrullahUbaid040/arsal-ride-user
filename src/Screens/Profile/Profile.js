import {View, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomHeader from '../../Components/CustomHeader';
import Text from '../../Components/Text';
import CreditCard from '../../Components/CreditCard';

export default function Profile({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <CustomHeader hideDivider />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.picContainer}>
          <Image
            source={require('../../../Assets/Images/profile.png')}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.nameText}>Chris Latham</Text>
          <TouchableOpacity>
            <Text style={styles.underlineText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={['Messages', 'Your Trips', 'Payments', 'Balance', 'Settings']}
            keyExtractor={item => item}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  if (index == 0) {
                    navigation.navigate('Messages');
                  } else if (index == 1) {
                    navigation.navigate('Trips');
                  } else if (index == 2) {
                    navigation.navigate('Payments');
                  }
                }}
                style={styles.listComponent}>
                <Text style={styles.listComponentText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.cardContainer}>
          <CreditCard />
        </View>
        <View style={styles.logoutContainer}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigation.navigate('Welcome')}>
            <Text style={styles.logoutText}>Logout</Text>
            <Image
              source={require('../../../Assets/Icons/Logout.png')}
              style={styles.logoutIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
