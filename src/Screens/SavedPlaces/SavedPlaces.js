import {View, FlatList, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomHeader from '../../Components/CustomHeader';
import Text from '../../Components/Text';
import InputField from '../../Components/InputField';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SavedPlace from '../../Components/SavedPlace';

export default function SavedPlaces() {
  const icon1 = (
    <Icon name="my-location" size={styles.iconSize} color={styles.iconColor} />
  );
  const icon2 = (
    <Icon name="location-pin" size={styles.iconSize} color={styles.iconColor} />
  );
  return (
    <View style={styles.mainContainer}>
      <CustomHeader />
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled"
        // showsVerticalScrollIndicator={false}
      >
        <View style={styles.fieldsContainer}>
          <InputField placeholder="Current location" leftIcon={icon1} />
          <InputField placeholder="Choose your destination" leftIcon={icon2} />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.text}>Saved places</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListEmptyComponent={() => (
              <View>
                <Text style={styles.empty}>No Jobs Found</Text>
              </View>
            )}
            ListFooterComponent={() => <View style={styles.footer}></View>}
            data={[
              {
                title: 'Destination',
                duration: '0 min',
                icon: 'Sheikhupura',
                key: 'item1',
              },
              {
                title: 'Home',
                duration: '2 min',
                icon: 'Faisal Town',
                key: 'item2',
              },
              {
                title: 'Office',
                duration: '6 min',
                icon: 'Mustafa Town',
                key: 'item3',
              },
              {
                title: 'Home',
                duration: '5 min',
                icon: 'Mustafa Town',
                key: 'item4',
              },
              {
                title: 'Office',
                duration: '2 min',
                icon: 'Mustafa Town',
                key: 'item5',
              },
            ]}
            keyExtractor={item => item.key}
            renderItem={({item, index}) => <SavedPlace />}
          />
        </View>
      </ScrollView>
    </View>
  );
}
