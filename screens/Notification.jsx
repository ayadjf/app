import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import quizImage from '../assets/quiz.png';

const startQuizAttempt = async (quizId, token) => {
  try {
    const response = await fetch("http://192.168.20.44:7000/api/quizzes/start_student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ quizId }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to start quiz attempt");
    }

    console.log("Quiz started successfully. Attempt ID:", data.attemptId);
    return data;

  } catch (error) {
    console.error("Error starting quiz attempt:", error.message);
  }
};

const QuizNotification = ({ onClose, quizId, token }) => {
  const [loading, setLoading] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = async () => {
    setLoading(true);ل
    const result = await startQuizAttempt(quizId, token); 
    setLoading(false); 

    if (result) {
      setQuizStarted(true); 
    }
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
        <Text style={{ fontWeight: '900', fontSize: 20, color: 'black' }}>✕</Text>
      </TouchableOpacity>

      <Image source={quizImage} style={styles.quizIcon} />
      <Text style={styles.quizTitle}>Quiz Time</Text>
      <Text style={styles.quizSubtitle}>Quiz {quizId}</Text>

      {quizStarted ? (
        <Text style={styles.startedText}>Quiz started successfully!</Text>
      ) : (
        <TouchableOpacity onPress={handleStartQuiz} style={styles.startBtn} disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color="#184F78" />
          ) : (
            <Text style={styles.startBtnText}>Start Now</Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: 254,
    height: 359,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  closeBtn: {
    position: 'absolute',
    top: 15,
    right: 20,
  },
  quizIcon: {
    width: 110,
    height: 110,
    marginBottom: 15,
  },
  quizTitle: {
    color: '#184F78',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  quizSubtitle: {
    fontSize: 19,
    color: '#222',
    marginBottom: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  startedText: {
    fontSize: 18,
    color: 'green',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  startBtn: {
    backgroundColor: '#FEDC62',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: 193,
    height: 43,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  startBtnText: {
    fontSize: 17,
    color: '#184F78',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default QuizNotification;
