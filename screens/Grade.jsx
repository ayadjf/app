import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation
import styles from './Grade.styles';
import  { useCallback } from 'react';
import { ScrollView, RefreshControl } from 'react-native';

const HomeIcon = require('../assets/home.png');
const GradeIcon = require('../assets/image.png');
const AccountIcon = require('../assets/acc.png');

const tabs = [
  { key: 'home', label: 'Home', icon: HomeIcon },
  { key: 'grade', label: 'Modules', icon: GradeIcon },
  { key: 'account', label: 'Account', icon: AccountIcon },
];

const Grade = () => {
  const navigation = useNavigation(); // Use navigation
  const [activeTab, setActiveTab] = useState('grade');

  const getGradeColor = (score) => {
    if (score >= 8) return '#4CAF50';
    if (score >= 5) return '#FFA000';
    return '#F44336';
  };

  const quizzes = [
    { title: 'Quiz 1', date: '07|12|2024', score: 9 },
    { title: 'Quiz 2', date: '07|12|2024', score: 7 },
    { title: 'Quiz 3', date: '07|12|2024', score: 8 },
    { title: 'Quiz 4', date: '07|12|2024', score: 10 },
  ];
  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
  
    // Simulate data fetching or actual API call
    setTimeout(() => {
      setRefreshing(false);
      // optionally re-fetch your data here
    }, 2000);
  }, []);
  return (
    <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        {/* Back arrow */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Modules')}>
          <Image source={require('../assets/list.png')} style={styles.backIcon} />
        </TouchableOpacity>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.mainTitle}>My Grades</Text>
          <Text style={styles.subTitle}>Archi 2</Text>
          <Text style={styles.subSubTitle}>2023-2024 Academic Year</Text>
        </View>

        {/* Quizzes */}
        <View style={styles.modulesContainer}>
          {quizzes.map((quiz, index) => (
            <View key={index} style={styles.moduleWrapper}>
              <TouchableOpacity style={styles.moduleItem}>
                <View style={styles.blueCircle} />
                <Image source={require('../assets/doc.png')} style={styles.docIcon} />
                <View style={styles.moduleText}>
                  <Text style={styles.moduleTitle}>{quiz.title}</Text>
                  <Text style={styles.moduleSubtitle}>{quiz.date}</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('QuizCorrectionScreen')}
                    style={[styles.gradeContainer, { backgroundColor: getGradeColor(quiz.score) }]}
                  >
                    <Text style={styles.gradeText}>{quiz.score}/10</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              {index < quizzes.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>
      </View>

       {/* Bottom Bar */}
                 <View style={styles.bottomBar}>
                         {tabs.map((tab) => {
                           const isFocused = activeTab === tab.key;
                 
                           return (
                             <TouchableOpacity
                               key={tab.key}
                               onPress={() => {
                                 setActiveTab(tab.key);
                                 if (tab.key === 'home') navigation.navigate('Home');
                                 if (tab.key === 'grade') navigation.navigate('Modules');
                                 if (tab.key === 'account') navigation.navigate('ProfileScreen');
                               }}
                               style={styles.tab}
                             >
                               {isFocused ? (
                                 <View style={styles.activeTab}>
                                   <View style={styles.whiteOuterCircle}>
                                     <View style={styles.yellowCircle}>
                                       <Image source={tab.icon} style={styles.activeIcon} />
                                     </View>
                                   </View>
                                   <Text style={styles.activeLabel}>{tab.label}</Text>
                                 </View>
                               ) : (
                                 <>
                                   <Image source={tab.icon} style={styles.inactiveIcon} />
                                   <Text style={styles.tabLabel}>{tab.label}</Text>
                                 </>
                               )}
                             </TouchableOpacity>
                           );
                         })}
                       </View>
    </View>
    </ScrollView>
  );
};

export default Grade;
