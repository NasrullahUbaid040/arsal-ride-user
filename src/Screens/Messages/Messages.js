import {View, FlatList, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Text from '../../Components/Text';
import CustomHeader from '../../Components/CustomHeader';
import TripCard from '../../Components/TripCard';

export default function Messages() {
  return (
    <View>
      <CustomHeader headerTitle={'Messages'} />
      <View style={styles.mainContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Image
                source={require('../../../Assets/Icons/chat.png')}
                style={styles.emptyIcon}
              />
              <Text style={styles.emptyText}>
                No new messages availlable at the moment, book rides to start a
                chat.
              </Text>
            </View>
          }
          data={[]}
          keyExtractor={item => item}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          renderItem={({item, index}) => <TripCard></TripCard>}
        />
      </View>
    </View>
  );
}
