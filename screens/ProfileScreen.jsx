import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './ProfileScreen.styles';

const HomeIcon = require('../assets/home.png');
const GradeIcon = require('../assets/image.png');
const AccountIcon = require('../assets/acc.png');

const tabs = [
  { key: 'home', label: 'Home', icon: HomeIcon },
  { key: 'grade', label: 'Modules', icon: GradeIcon },
  { key: 'account', label: 'Account', icon: AccountIcon },
];

const ProfileScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('account');

  return (
    <View style={styles.mainContainer}>
      {/* Content Container */}
      <View style={styles.contentContainer}>
       
        {/* Profile section */}
        <View style={styles.profileSection}>
          <Image source={require('../assets/profiley.png')} style={styles.profileImage}/>
          <Text style={styles.name}>Benali Sara</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Settings')}
          >
            <Image source={require('../assets/settings.png')} style={styles.icon}/>
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('ContactInformation')}
          >
            <Text style={styles.buttonText}>Contact Information</Text>
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

export default ProfileScreen;
