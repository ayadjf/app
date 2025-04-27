import React, { useState, useCallback } from 'react';
import { ScrollView, RefreshControl } from 'react-native';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Modules.styles';

const Modules = () => {
  const navigation = useNavigation();
  const activeTab = 'grade'; // Current screen is Grade

  const handleModulePress = () => {
    navigation.navigate('Grade'); // You can later make this dynamic for each module
  };

  const handleTabPress = (key) => {
    if (key === 'home') navigation.navigate('Home');
    if (key === 'account') navigation.navigate('ProfileScreen');
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

  return (
     <ScrollView
           contentContainerStyle={{ flexGrow: 1 }}
           refreshControl={
             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
           }
         >
    
    <View style={styles.mainContainer}>
      {/* Title section */}
      <View style={styles.titleSection}>
        <Text style={styles.title}>My Modules</Text>
      </View>

      {/* Modules list */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={[styles.button, styles.button1]} onPress={handleModulePress}>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonTitle}>Analyse 3</Text>
            <Text style={styles.buttonSubtitle}>math</Text>
            <Text style={styles.buttonDetails}>Ens Mahfoudi</Text>
          </View>
          <Image source={require('../assets/s1.png')} style={styles.buttonIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.button2]} onPress={handleModulePress}>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonTitle}>SFDSD</Text>
            <Text style={styles.buttonSubtitle}>Structure de fichier et structure dynamique</Text>
            <Text style={styles.buttonDetails}>Ens Kermi</Text>
          </View>
          <Image source={require('../assets/s2.png')} style={styles.buttonIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.button3]} onPress={handleModulePress}>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonTitle}>Archi 2</Text>
            <Text style={styles.buttonSubtitle}>Architecture des ordinateurs</Text>
            <Text style={styles.buttonDetails}>Ens Sehad</Text>
          </View>
          <Image source={require('../assets/s3.png')} style={styles.buttonIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.button4]} onPress={handleModulePress}>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonTitle}>Algebre</Text>
            <Text style={styles.buttonSubtitle}>math</Text>
            <Text style={styles.buttonDetails}>Ens Ait Amrane</Text>
          </View>
          <Image source={require('../assets/s4.png')} style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.tab} onPress={() => handleTabPress('home')}>
          <Image source={require('../assets/home.png')} style={styles.inactiveIcon} />
          <Text style={styles.tabLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <View style={styles.activeTab}>
            <View style={styles.whiteOuterCircle}>
              <View style={styles.yellowCircle}>
                <Image source={require('../assets/image.png')} style={styles.activeIcon} />
              </View>
            </View>
            <Text style={styles.activeLabel}>Grade</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab} onPress={() => handleTabPress('account')}>
          <Image source={require('../assets/acc.png')} style={styles.inactiveIcon} />
          <Text style={styles.tabLabel}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

export default Modules;
