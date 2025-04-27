import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import styles from './Setting.styles';

const HomeIcon = require('../assets/home.png');
const GradeIcon = require('../assets/image.png');
const AccountIcon = require('../assets/acc.png');

const tabs = [
  { key: 'home', label: 'Home', icon: HomeIcon },
  { key: 'grade', label: 'Modules', icon: GradeIcon },
  { key: 'account', label: 'Account', icon: AccountIcon },
];

const Setting = () => {
  const [activeTab, setActiveTab] = useState('account');
  const navigation = useNavigation(); // Access navigation

  return (
    <View style={styles.mainContainer}>
      {/* Content Container */}
      <View style={styles.contentContainer}>
        {/* Back arrow */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/arrow.png')} style={styles.backIcon} />
        </TouchableOpacity>

        {/* Profile section */}
        <View style={styles.profileSection}>
          <Text style={styles.name}>Setting</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonGroup}>
          {/* Edit Information Button */}
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('EditInformation')} // Navigate to EditInformation screen
          >
            <Image source={require('../assets/settings.png')} style={styles.icon} />
            <Text style={styles.buttonText}>Edit information</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Image source={require('../assets/logout.png')} style={styles.icon} />
            <Text style={styles.buttonText} onPress={() => navigation.navigate('WelcomeScreen')} >Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
{/* Bottom Navigation Bar */}
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
  );
};

export default Setting;
