import {View, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import CustomHeader from '../../Components/CustomHeader';
import Text from '../../Components/Text';
import StarRating from 'react-native-star-rating-widget';
import CustomButton from '../../Components/CustomButton';

export default function RideCompleted() {
  const [rating, setRating] = useState(5);

  return (
    <View style={styles.container}>
      <CustomHeader blackHeader hideDivider />
      <View style={styles.mainContainer}>
        <View style={styles.mainTextContainer}>
          <Text style={styles.mainText}>Ride Completed.</Text>
        </View>
        <View style={styles.borderImage}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../Assets/Icons/mark.png')}
              style={styles.imageStyle}
            />
          </View>
        </View>
        <Text style={styles.profileName}>Mark Nicolas</Text>
        <StarRating
          maxStars={5}
          starSize="15"
          //   disabled={true}
          //   fullStarColor={'red'}
        />
        <View style={styles.rateTextContainer}>
          <Text style={styles.rateText}>Please rate your last ride.</Text>
        </View>
        <CustomButton
          title="Leave your feedback"
          style={styles.firstButton}
          textStyle={styles.firstText}
        />
        <CustomButton
          title="Submit your review"
          style={styles.secondButton}
          textStyle={styles.secondText}
        />
      </View>
    </View>
  );
}
