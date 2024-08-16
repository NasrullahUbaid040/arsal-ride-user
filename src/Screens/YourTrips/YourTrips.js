import {FlatList, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Text from '../../Components/Text';
import CustomHeader from '../../Components/CustomHeader';
import TripCard from '../../Components/TripCard';

export default function YourTrips() {
  return (
    <View>
      <CustomHeader headerTitle={'Your Trips'} />
      <View style={styles.mainContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={['Messages', 'Your Trips', 'Payments', 'Balance', 'Settings']}
          keyExtractor={item => item}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderItem={({item, index}) => <TripCard />}
        />
      </View>
    </View>
  );
}
