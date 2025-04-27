import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const QuizScreen = ({ navigation, route }) => {
  const { quizId, token } = route.params; // We need to receive quizId and token from navigation
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]); // New state to store answers for each question
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timer, setTimer] = useState(180); // 3 minutes

  useEffect(() => {
    fetchQuestions();
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev === 1) {
          handleAutoSubmit(); // Auto submit if time ends
        }
        return prev > 0 ? prev - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/quiz/${quizId}/questions`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (response.ok) {
        setQuestions(data.questions); // Assume API returns { questions: [...] }
        fetchAnswersForQuestions(data.questions); // Fetch answers for each question after questions are fetched
      } else {
        Alert.alert('Error', data.message || 'Failed to load questions');
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
      Alert.alert('Error', 'Cannot fetch questions.');
    }
  };

  const fetchAnswersForQuestions = async (questions) => {
    try {
      const answersData = await Promise.all(questions.map(async (question) => {
        const response = await fetch(`http://localhost:5000/api/quiz/${quizId}/question/${question.id}/answers`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        if (response.ok) {
          return { questionId: question.id, answers: data.answers }; // Store answers by questionId
        } else {
          throw new Error('Failed to fetch answers');
        }
      }));
      setAnswers(answersData);
    } catch (error) {
      console.error('Error fetching answers:', error);
      Alert.alert('Error', 'Cannot fetch answers.');
    }
  };

  const handleAnswer = (option) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: option });
  };

  const handleSubmit = async () => {
    const responses = questions.map((q, index) => ({
      questionId: q.id,
      selectedAnswer: selectedAnswers[index] || ''
    }));

    try {
      const response = await fetch('http://localhost:7000/api/quizzes/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          quizId,
          responses
        })
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Quiz submitted successfully. Score:', data.score);
        Alert.alert('Quiz Submitted', `Your Score: ${data.score}`);
        navigation.navigate('Home'); // Navigate back to Home (or Results screen)
      } else {
        console.error('Quiz submission failed:', data.message);
        Alert.alert('Submission Failed', data.message);
      }
    } catch (error) {
      console.error('Error submitting quiz:', error);
      Alert.alert('Error', 'Cannot submit quiz.');
    }
  };

  const handleAutoSubmit = async () => {
    try {
      const response = await fetch('http://localhost:7000/api/quizzes/auto-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ quizId })
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Auto submission:', data.message);
        Alert.alert('Time\'s Up!', 'Quiz auto-submitted.');
        navigation.navigate('Home'); // Go back after auto submit
      } else {
        console.error('Auto submission failed:', data.message);
        Alert.alert('Auto Submission Failed', data.message);
      }
    } catch (error) {
      console.error('Error auto-submitting quiz:', error);
      Alert.alert('Error', 'Auto-submit failed.');
    }
  };

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (questions.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Loading quiz...</Text>
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswers = answers.find(a => a.questionId === currentQuestion.id)?.answers || [];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.menu}>≡</Text>
        </TouchableOpacity>
        <Text style={styles.title}>My Quiz</Text>
      </View>
 {/* Question Progress Bar */}
 <View style={styles.progressBarWrapper}>
  <View style={styles.progressBarContainer}>
    <View style={styles.progressBar}>
      {questions.map((q, index) => (
        <View key={q.id} style={[styles.progressItem, selectedAnswers[index] ? styles.answered : {}]}> 
          <Text style={styles.progressText}>{q.id}</Text>
        </View>
      ))}
    </View>
  </View>
</View>

      {/* Timer */}
      <Text style={styles.timer}>{formatTime()}</Text>

      {/* Question */}
      <View style={styles.questionBox}>
        <Text style={styles.questionText}>Question {currentQuestionIndex + 1}</Text>
        <Text style={styles.question}>{currentQuestion.question}</Text>
        <Text style={styles.questionText2}>Choose an answer:</Text>

        {/* Answer options */}
        {currentAnswers.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionContainer,
              selectedAnswers[currentQuestionIndex] === option ? styles.selectedOption : {}
            ]}
            onPress={() => handleAnswer(option)}
          >
            <View style={styles.optionLetter}>
              <Text style={styles.letterText}>{String.fromCharCode(65 + index)}</Text>
            </View>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navigation}>
        {currentQuestionIndex > 0 && (
          <TouchableOpacity
            style={[styles.button, styles.previousButton]}
            onPress={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
          >
            <Text style={styles.buttonText1}>Previous</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={[styles.button, currentQuestionIndex === questions.length - 1 ? styles.submitButton : {}]}
          onPress={() => {
            if (currentQuestionIndex < questions.length - 1) {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
              handleSubmit();
            }
          }}
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
  container: { flex: 1, padding: 20, backgroundColor: '#fff',bottom:-30 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  menu: { fontSize: 24, fontWeight: 'bold', marginRight: 10 },
  title: { fontSize: 20, fontWeight: 'bold'},
  progressBar: { flexDirection: 'row', justifyContent: 'center' },
  progressItem: { 
    width: 30, height: 30, borderRadius: 0, marginLeft:0,marginRight:0,
    backgroundColor: '#184F78', marginHorizontal: 5, alignItems: 'center', justifyContent: 'center' 
  },
  answered: { backgroundColor: '#FEDC62' },
  progressText: { fontSize:18,fontWeight: 'bold', color: '#000' },
  timer: { fontSize: 20, fontWeight: 'bold', color: '#FEDC62', textAlign: 'left', marginBottom: -5,left:10 ,top:10},
  questionBox: { 
    backgroundColor: '#fff', padding: 40, borderRadius: 20, shadowColor: 'rgb(160, 162, 164,1)',weight:900,height:180,top:40,width:350,alignSelf:'center',
    shadowOffset: { width: 4, height: 100}, // Drop shadow direction
    shadowOpacity: -100, // Adjust opacity (lower = lighter shadow)
    shadowRadius: 6, // Increase for a softer shadow
    elevation: 20, // Required for Android
  },
  questionText: { fontSize: 24, fontWeight: 'bold', marginBottom: 15,top:-10,left:-10 },
  questionText2: { fontSize: 20, fontWeight: 'medium', marginBottom: 10,color:' rgb(173, 168, 168)',left:-10},

  question: { fontSize: 20, color: '#000',fontWeight: 'light', marginBottom: 10 ,left:-10},
  option: {
    padding: 15, borderRadius: 8, borderWidth: 1, Color:' rgba(191, 200, 236, 0.2)', marginTop: 50, alignItems: 'center', marginBottom: -30
  },
  selectedOption: { backgroundColor: '#FEDC62', borderColor: '#FEDC62' },
  optionText: { fontSize: 16, color: '#000', textAlign:'center' },
  navigation: { flexDirection: 'row', justifyContent: 'space-between' },
  button: { backgroundColor: '#184F78', padding:10,borderRadius: 10 ,top:400,width:162,
    backgroundColor: 'rgba(24, 79, 120, 1)',  // Light blue color
    shadowColor: '#184F78',  // Shadow color
    shadowOffset: { width: 4, height: 4 }, // Drop shadow direction
    shadowOpacity: 0.3, // Adjust opacity (lower = lighter shadow)
    shadowRadius: 6, // Increase for a softer shadow
    elevation: 5, // Required for Android
    borderRadius: 10, // Optional for rounded corners
  },
  buttonText2: { color: '#fff', fontSize: 18, fontWeight: 'bold' ,textAlign:'center'},
  buttonText1: { color: '#184F78', fontSize: 18, fontWeight: 'bold' ,textAlign:'center'},

  Text: { color: '000', fontSize: 27, fontWeight: 'bold' ,textAlign:'center',marginBottom:10 ,fontFamily:'poppins'},
  underProgressBar: { backgroundColor: '#4f46e5', height: 30, marginTop: -0 },
  submitButton: { backgroundColor: '#FEDC62' }, // Yellow for Submit
  previousButton: { backgroundColor: 'rgba(24, 79, 120, 0.2)' ,
    shadowColor: '#184F78',  // Shadow color
    shadowColor: '#184F78',  // Shadow color
    shadowOffset: { width: 4, height: 4 }, // Drop shadow direction
    shadowOpacity: 0.3, // Adjust opacity (lower = lighter shadow)
    shadowRadius: 6, // Increase for a softer shadow
    elevation: 14, // Required for Android
    borderRadius: 10, // Optional for rounded corners
  }, // Light blue for Previous
  firstNextButton: { left:210 }, // Alignement à droite pour la première question
  optionContainer: {alignSelf:'center', flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: 10, padding: 10, marginBottom: 25,bottom:-70,width:330 },
  optionLetter: { width: 40, height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  optionLetter0: { backgroundColor: '#5B3277',
    shadowColor: '#EB107E', // Adjust color for a soft glow (change per color)
    shadowOffset: { width: 0, height: 2 }, // Moins de déplacement
  shadowOpacity: 0.5, // Moins intense
  shadowRadius: 10, // Ajuste la diffusion
  elevation: 5, // Pour Android
   },
  optionLetter1: { backgroundColor: '#196F3D' , 
    
    shadowColor: '#277937', // Adjust color for a soft glow (change per color)
    shadowOffset: { width: 0, height: 2 }, // Moins de déplacement
  shadowOpacity: 0.5, // Moins intense
  shadowRadius: 10, // Ajuste la diffusion
  elevation: 5, // Pour Android
  },
  optionLetter2: { backgroundColor: '#FEDC62',
  shadowColor:'#F1AC20' ,
  shadowOffset: { width: 0, height: 2 }, // Moins de déplacement
  shadowOpacity: 0.5, // Moins intense
  shadowRadius: 10, // Ajuste la diffusion
  elevation: 5, // Pour Android
  },
  letterText: { color: '#fff', fontWeight:'900' , fontSize: 16 },
  progressBarWrapper: {
    height:30,
    borderRadius:90,
    backgroundColor: '#184F78', // Couleur du rectangle en dessous
    paddingVertical: -20,
    marginBottom: 20,
  },
  
});

export default QuizScreen;