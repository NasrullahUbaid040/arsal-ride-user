import {
  View,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import CustomHeader from '../../Components/CustomHeader';
import Text from '../../Components/Text';
import styles from './styles';
import * as Progress from 'react-native-progress';
import RideCategoryCard from '../../Components/RideCategoryCard';
import CustomButton from '../../Components/CustomButton';
import StarRating from 'react-native-star-rating-widget';

export default function Ride({navigation}) {
  const [selectedCard, setSelectedCard] = useState();
  const [myIndex, setMyIndex] = useState(0);
  const [rating, setRating] = useState(1);

  const [rideList, setRideList] = useState([
    {carName: 'Suzuki Wagon R', price: 752},
    {carName: 'Toyota Axio', price: 1080},
    {carName: 'Suzuki Alto', price: 420},
    {carName: 'Suzuki Cultus', price: 520},
  ]);

  return (
    <ImageBackground
      source={require('../../../Assets/Icons/mapBack.png')}
      imageStyle={styles.image}
      style={styles.imageContainer}>
      <View>
        <CustomHeader blackHeader hideDivider />
        {myIndex == 0 && (
          <Text style={styles.headerText}>Choose your Ride</Text>
        )}
        {myIndex == 1 && (
          <Text style={styles.headerText}>Finding your Ride</Text>
        )}
        {myIndex == 2 && (
          <Text style={styles.headerText}>Your Ride is on the way</Text>
        )}
        {myIndex == 3 && (
          <Text style={styles.headerText}>Your Ride is on the way</Text>
        )}
      </View>
      {myIndex == 0 && (
        <View style={styles.bottomContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={rideList}
            keyExtractor={item => item}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            renderItem={({item, index}) => {
              return (
                <RideCategoryCard
                  data={item}
                  onpress={() => setSelectedCard(index)}
                  selectedValue={selectedCard == index ? true : false}
                />
              );
            }}
          />
          <CustomButton
            title={'Find Your Ride'}
            style={styles.button}
            onpress={() => setMyIndex(1)}
          />
        </View>
      )}
      {myIndex == 1 && (
        <View style={styles.bottomContainerF}>
          <Text style={styles.sheetHeaderTextF}>Finding your Ride...</Text>
          <Progress.Bar
            progress={0.3}
            width={350}
            height={3}
            indeterminate={true}
            color={'black'}
            unfilledColor={'rgba(0, 0, 0, 0.25)'}
            borderColor={'white'}
            borderRadius={0}
          />
          <View style={styles.innerCardF}>
            <View style={styles.leftContainerF}>
              <Image
                source={require('../../../Assets/Icons/blackLocationBar.png')}
                resizeMode="contain"
                style={styles.fieldIconsF}
              />
            </View>
            <View style={styles.rightContainerF}>
              <View>
                <Text style={styles.smallTextF}>From</Text>
                <TextInput style={styles.inputFieldF} />
              </View>
              <View style={{marginTop: 20}}>
                <Text style={styles.smallTextF}>To</Text>
                <TextInput style={styles.inputFieldF} />
              </View>
            </View>
          </View>
          <CustomButton
            title="Cancel your Ride"
            style={styles.buttonF}
            onpress={() => setMyIndex(2)}
          />
        </View>
      )}
      {myIndex == 2 && (
        <View style={styles.bottomContainerF}>
          <Text style={styles.sheetHeaderTextF}>
            Mark is arriving in 3 mins...
          </Text>
          <Progress.Bar
            progress={0.3}
            width={350}
            height={3}
            indeterminate={true}
            color={'black'}
            unfilledColor={'rgba(0, 0, 0, 0.25)'}
            borderColor={'white'}
            borderRadius={0}
          />
          <View style={styles.innerCardW}>
            <View style={styles.topContainerW}>
              <View style={styles.topLeftW}>
                <Image
                  source={require('../../../Assets/Icons/mark.png')}
                  style={styles.profileImage}
                />
              </View>
              <View style={styles.topCenterW}>
                <Text style={styles.nameTextW}>Mark Nicolas</Text>
                <Text style={styles.carTextW}>Suzuki Wagon-R</Text>
                <StarRating
                  rating={rating}
                  onChange={value => setRating(value)}
                  maxStars={1}
                  starSize="15"
                />
              </View>
              <View style={styles.topRightW}>
                <View style={styles.carNumberW}>
                  <Text>LEU-007</Text>
                </View>
              </View>
            </View>
            <View style={styles.bottomContainerW}>
              <TouchableOpacity style={styles.bottomLeftW}>
                <Image
                  source={require('../../../Assets/Icons/call.png')}
                  style={styles.iconW}
                />
                <Text>CALL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomRightW}
                onPress={() => navigation.navigate('Chat')}>
                <Image
                  source={require('../../../Assets/Icons/contact.png')}
                  style={styles.iconW}
                />
                <Text>CHAT</Text>
              </TouchableOpacity>
            </View>
          </View>
          <CustomButton
            title="Cancel your Ride"
            style={styles.buttonF}
            onpress={() => setMyIndex(3)}
          />
        </View>
      )}
      {myIndex == 3 && (
        <View style={styles.bottomContainerF}>
          <Text style={styles.sheetHeaderTextF}>
            Mark is arriving in 3 mins...
          </Text>
          <Progress.Bar
            progress={0.3}
            width={350}
            height={3}
            indeterminate={true}
            color={'black'}
            unfilledColor={'rgba(0, 0, 0, 0.25)'}
            borderColor={'white'}
            borderRadius={0}
          />
          <View style={styles.innerCardC}>
            <View>
              <Text style={styles.questionText}>
                Would you like to cancel your ride?
              </Text>
            </View>
            <View style={styles.bottomContainerC}>
              <TouchableOpacity
                style={styles.yesButtonC}
                onPress={() => navigation.navigate('ChooseRide')}>
                <Text style={styles.yesTextC}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.noButtonC}
                onPress={() => setMyIndex(2)}>
                <Text>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('RideCompleted')}>
            <Text style={styles.underlineText}>Report an issue</Text>
          </TouchableOpacity>
        </View>
      )}
    </ImageBackground>
  );
}
