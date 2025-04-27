import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import styles from './Home.styles';
import Notification from './Notification';
import { ScrollView, RefreshControl } from 'react-native';

const HomeIcon = require('../assets/home.png');
const GradeIcon = require('../assets/image.png');
const AccountIcon = require('../assets/acc.png');

const tabs = [
  { key: 'home', label: 'Home', icon: HomeIcon },
  { key: 'grade', label: 'Modules', icon: GradeIcon },
  { key: 'account', label: 'Account', icon: AccountIcon },
];

const Home = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [showNotification, setShowNotification] = useState(false);

  const handleProfilePress = () => {
    navigation.navigate('ProfileScreen');
  };

  const handleQuizPress = (quizNumber) => {
    console.log(`Quiz ${quizNumber} pressed`);
  };

  const [refreshing, setRefreshing] = useState(false);

const onRefresh = useCallback(() => {
  setRefreshing(true);

  // Simulate data fetching or actual API call
  setTimeout(() => {
    setRefreshing(false);
    // optionally re-fetch your data here
  }, 2000);
}, []);

  const handleTabPress = (tabKey) => {
    setActiveTab(tabKey);
    if (tabKey === 'home') navigation.navigate('Home');
    if (tabKey === 'grade') navigation.navigate('Modules');
    if (tabKey === 'account') navigation.navigate('ProfileScreen');
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.profileContainer}
            onPress={handleProfilePress}
            activeOpacity={0.8}
          >
            <Image source={require('../assets/profiley.png')} style={styles.profileImage} />
            <View>
              <Text style={styles.greeting}>Hello !</Text>
              <Text style={styles.name}>Benali Sara</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.title}>Today's Quiz</Text>
        </View>

        {/* Date Selector */}
        <View style={styles.dateSelector}>
          {[22, 23, 24, 25, 26].map((date, index) => (
            <TouchableOpacity key={date} style={[styles.dateItem, date === 24 && styles.activeDate]}>
              <Text style={[styles.dateNumber, date === 24 && styles.activeDateText]}>{date}</Text>
              <Text style={[styles.dateDay, date === 24 && styles.activeDateText]}>
                {['Sat', 'Sun', 'Mon', 'Tue', 'Wed'][index]}
              </Text>
              <Text style={[styles.dateMonth, date === 24 && styles.activeDateText]}>Oct</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Status Filter */}
        <View style={styles.statusFilter}>
          {['All', 'To do', 'Done', 'Absent'].map((status, i) => (
            <TouchableOpacity
              key={status}
              style={[
                styles.statusItem,
                i === 0 ? styles.statusAll : i === 1 ? styles.statusTodo : i === 2 ? styles.statusDone : styles.statusAbsent
              ]}
            >
              <Text style={styles.statusText}>{status}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quiz List */}
        <View style={styles.quizList}>
         <TouchableOpacity style={styles.quizItem} onPress={() => handleQuizPress(1)}>
  <View style={styles.quizContent}>
    
    <View style={styles.quizTextContainer}>
      <Text style={styles.subject}>Object Oriented Programming</Text>
      <Text style={styles.quizTitle}>Quiz 05 : Classes and Objects</Text>
      <Text style={styles.quizTime}>10:00 AM</Text>
      <Text style={[styles.quizStatus, styles.statusDoneText]}>Done</Text>
    </View>
  </View>
</TouchableOpacity>




          <TouchableOpacity style={styles.quizItem} onPress={() => handleQuizPress(2)}>
            <Text style={styles.subject}>Optique et Ondes Electromagnétiques_COE</Text>
            <Text style={styles.quizTitle}>Quiz 02 : systèmes optiques</Text>
            <Text style={styles.quizTime}>09:00 PM</Text>
            <Text style={[styles.quizStatus, styles.statusAbsentText]}>Absent</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quizItem}
            onPress={() => setShowNotification(true)}
          >
            <Text style={styles.subject}>English</Text>
            <Text style={styles.quizTitle}>Quiz 01 : Grammar</Text>
            <Text style={styles.quizTime}>03:00 PM</Text>
            <Text style={[styles.quizStatus, styles.statusTodoText]}>To-do</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        {tabs.map((tab) => {
          const isFocused = activeTab === tab.key;
          return (
            <TouchableOpacity key={tab.key} onPress={() => handleTabPress(tab.key)} style={styles.tab}>
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

      {/* Quiz Notification Modal */}
      <Modal visible={showNotification} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <Notification
            onClose={() => {
              setShowNotification(false);
            }}
            onStart={() => {
              setShowNotification(false);
              navigation.navigate('QuizScreenTime');
            }}
          />
        </View>
      </Modal>
    </View>
    </ScrollView>
  );
};

export default Home;
