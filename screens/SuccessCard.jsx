import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from './SuccessCard.styles';
import XImage from '../assets/X.png';
import GoodjobAnimation from '../assets/GoodjobAnimation.json';

const SuccessCard = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      {/* X button navigates to Home */}
      <TouchableOpacity style={styles.xButton} onPress={() => navigation.navigate('Home')}>
        <Image source={XImage} style={styles.xIcon} />
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        {/* Lottie Animation instead of PNG */}
        <LottieView
          source={GoodjobAnimation}
          autoPlay
          loop={false}
          style={styles.image}
        />
        <Text style={styles.goodtext}>GOOD JOB!</Text>

        {/* Score and message */}
        <View style={styles.redBackground}>
          <Text style={styles.score}>8/10</Text>
          <Text style={styles.points}>+80 Points</Text>
          <Text style={styles.message}>
            You answered 8 out of 10 questions correct. See the detailed report.
          </Text>
        </View>

        {/* View Report button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QuizCorrectionScreen')}>
          <Text style={styles.buttonText}>View Report</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuccessCard;
