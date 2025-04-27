import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from './FailCard.styles';
import XImage from '../assets/X.png';
import BadjobAnimation from '../assets/BadjobAnimation.json'; // Lottie animation file

const FailCard = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      {/* X button navigates to Home */}
      <TouchableOpacity style={styles.xButton} onPress={() => navigation.navigate('Home')}>
        <Image source={XImage} style={styles.xIcon} />
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        {/* Lottie animation */}
        <LottieView
          source={BadjobAnimation}
          autoPlay
          loop
          style={styles.image} // same style you used for the image
        />

        {/* BAD JOB! text */}
        <Text style={styles.badtext}>BAD JOB!</Text>

        {/* Score box */}
        <View style={styles.redBackground}>
          <Text style={styles.score}>2/10</Text>
          <Text style={styles.points}>+20 Points</Text>
          <Text style={styles.message}>
            You answered 2 out of 10 questions correct. See the detailed report.
          </Text>
        </View>

        {/* View Report button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('QuizCorrectionScreen')}
        >
          <Text style={styles.buttonText}>View Report</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FailCard;
