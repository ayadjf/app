import React, { useState } from 'react';
import  { useCallback } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Edit.styles';

const HomeIcon = require('../assets/home.png');
const GradeIcon = require('../assets/image.png');
const AccountIcon = require('../assets/acc.png');

const tabs = [
  { key: 'home', label: 'Home', icon: HomeIcon },
  { key: 'grade', label: 'Modules', icon: GradeIcon },
  { key: 'account', label: 'Account', icon: AccountIcon },
];

const Edit = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('account');

  const [name, setName] = useState('Benali Sara');
  const [email, setEmail] = useState('ns_benali@esi.dz');
  const [year, setYear] = useState('2CP');
  const [section, setSection] = useState('A');
  const [group, setGroup] = useState('03');

  const handleSave = () => {
    console.log({ name, email, year, section, group });
    // Add AsyncStorage or API call here if needed
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
      {/* Content Container */}
      <View style={styles.contentContainer}>
        {/* Back arrow */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/arrow.png')} style={styles.backIcon} />
        </TouchableOpacity>

        {/* Profile section */}
        <View style={styles.profileSection}>
          <Image source={require('../assets/profiley.png')} style={styles.profileImage} />
          <Text style={styles.name}>Contact Information</Text>
        </View>

        {/* Editable Inputs with Labels */}
        <View style={styles.buttonGroup}>
          <Text style={styles.label}>Full Name:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Full Name"
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
          />

          <Text style={styles.label}>Level:</Text>
          <TextInput
            style={styles.input}
            value={year}
            onChangeText={setYear}
            placeholder="Level"
          />

          <Text style={styles.label}>Section:</Text>
          <TextInput
            style={styles.input}
            value={section}
            onChangeText={setSection}
            placeholder="Section"
          />

          <Text style={styles.label}>Group:</Text>
          <TextInput
            style={styles.input}
            value={group}
            onChangeText={setGroup}
            placeholder="Group"
          />

          <TouchableOpacity style={styles.buttonn} onPress={handleSave}>
            <Text style={styles.buttonnText}>SAVE</Text>
          </TouchableOpacity>
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

export default Edit;
