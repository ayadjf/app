import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const questions = [
  { id: 1, question: 'In POO we will use ______', options: ['Java', 'Python', 'C language'], answer: 'Python' },
  { id: 2, question: 'Which is an OOP language?', options: ['C', 'Java', 'HTML'], answer: 'Java' },
  { id: 3, question: 'What is React Native?', options: ['Framework', 'Library', 'Language'], answer: 'Framework' },
];

const QuizScreenTime = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timer, setTimer] = useState(60); // 60 seconds per question

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev > 1) return prev - 1;
        clearInterval(interval);
        setTimeout(() => {
          handleNext();
        }, 0);
                return 60;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestionIndex]);

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleAnswer = (option) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: option });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setTimer(60); 
    } else {
      const correctAnswersCount = questions.reduce((count, q, index) => {
        if (selectedAnswers[index] === q.answer) {
          return count + 1;
        }
        return count;
      }, 0);
  
      const half = Math.ceil(questions.length / 2);
  
      if (correctAnswersCount >= half) {
        navigation.navigate('SuccessCard');
      } else {
        navigation.navigate('FailCard');
      }
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.menu}>≡</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Quiz 05 : Generalities</Text>
      </View>

      <Text style={styles.Text}>My Quiz</Text>

      <View style={styles.progressBarWrapper}>
        <View style={styles.progressBar}>
          {questions.map((q, index) => (
            <View key={q.id} style={[styles.progressItem, selectedAnswers[index] ? styles.answered : {}]}>
              <Text style={styles.progressText}>{q.id}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.timer}>{formatTime()}</Text>

      <View style={styles.questionBox}>
        <Text style={styles.questionText}>Question 0{questions[currentQuestionIndex].id}</Text>
        <Text style={styles.question}>{questions[currentQuestionIndex].question}</Text>
        <Text style={styles.questionText2}>Choose an answer</Text>

        {questions[currentQuestionIndex].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.optionContainer, selectedAnswers[currentQuestionIndex] === option ? styles.selectedOption : {}]}
            onPress={() => handleAnswer(option)}
          >
            <View style={[styles.optionLetter, styles[`optionLetter${index}`]]}>
              <Text style={styles.letterText}>{String.fromCharCode(65 + index)}</Text>
            </View>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.navigation}>
        <TouchableOpacity
          onPress={handleNext}
          style={[
            styles.button,
            currentQuestionIndex === questions.length - 1 ? styles.submitButton : {},
          ]}
        >
          <Text style={styles.buttonText2}>
            {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', bottom: -30 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  menu: { fontSize: 24, fontWeight: 'bold', marginRight: 10 },
  title: { fontSize: 20, fontWeight: 'bold' },
  progressBar: { flexDirection: 'row', justifyContent: 'center' },
  progressItem: {
    width: 30, height: 30, backgroundColor: '#184F78',
    marginHorizontal: 5, alignItems: 'center', justifyContent: 'center'
  },
  answered: { backgroundColor: '#FEDC62' },
  progressText: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  timer: { fontSize: 20, fontWeight: 'bold', color: '#FEDC62', textAlign: 'left', marginBottom: -5, left: 10, top: 10 },
  questionBox: {
    backgroundColor: '#fff', padding: 40, borderRadius: 20, height: 180, top: 40, width: 350, alignSelf: 'center',
    shadowColor: 'rgb(160, 162, 164)', shadowOffset: { width: 4, height: 100 }, shadowOpacity: -100, shadowRadius: 6, elevation: 20
  },
  questionText: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, top: -10, left: -10 },
  questionText2: { fontSize: 20, fontWeight: '500', marginBottom: 10, color: 'rgb(173, 168, 168)', left: -10 },
  question: { fontSize: 20, color: '#000', marginBottom: 10, left: -10 },
  selectedOption: { backgroundColor: '#FEDC62', borderColor: '#FEDC62' },
  optionText: { fontSize: 16, color: '#000', textAlign: 'center' },
  navigation: { flexDirection: 'row', justifyContent: 'flex-end' },
  button: {
    backgroundColor: 'rgba(24, 79, 120, 1)', padding: 10, borderRadius: 10, top: 400, width: 162,
    shadowColor: '#184F78', shadowOffset: { width: 4, height: 4 }, shadowOpacity: 0.3, shadowRadius: 6, elevation: 5
  },
  buttonText2: { color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  Text: { fontSize: 27, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  submitButton: { backgroundColor: '#FEDC62' },
  optionContainer: {
    alignSelf: 'center', flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F4F6',
    borderRadius: 10, padding: 10, marginBottom: 25, bottom: -70, width: 330
  },
  optionLetter: {
    width: 40, height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginRight: 10
  },
  optionLetter0: {
    backgroundColor: '#5B3277', shadowColor: '#EB107E', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5, shadowRadius: 10, elevation: 5
  },
  optionLetter1: {
    backgroundColor: '#196F3D', shadowColor: '#277937', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5, shadowRadius: 10, elevation: 5
  },
  optionLetter2: {
    backgroundColor: '#FEDC62', shadowColor: '#F1AC20', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5, shadowRadius: 10, elevation: 5
  },
  letterText: { color: '#fff', fontWeight: '900', fontSize: 16 },
  progressBarWrapper: {
    height: 30, borderRadius: 90, backgroundColor: '#184F78', marginBottom: 20,
  },
});

export default QuizScreenTime;
