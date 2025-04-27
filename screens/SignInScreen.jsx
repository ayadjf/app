import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import axios from 'axios';

const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleSignIn = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Please enter email and password");
            return;
        }
    
        try {
            const response = await axios.post('http://10.0.27.146:7000/api/students/login', { 
                email, 
                password 
            }, {
                headers: { 'Content-Type': 'application/json' },
            });
    
            const { accessToken, teacher } = response.data;
            console.log("Access Token:", accessToken);
            console.log("Teacher Info:", teacher);
    
            navigation.navigate('Home', { user: teacher });
    
        } catch (err) {
            console.log(err.response?.data || err.message);
            Alert.alert("Sign In Failed", err?.response?.data?.message || "Server error");
        }
    };
    
    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('WelcomeScreen')}>
                <Image source={require('../assets/arrow.png')} style={styles.backIcon} />
            </TouchableOpacity>

            {/* Logo */}
            <Text style={styles.logoText}>κουί<Text style={styles.highlight}>ζ</Text>u</Text>

            {/* Form */}
            <View style={styles.formContainer}>
                <Text style={styles.title}>SIGN IN</Text>

                {/* Email Input */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Email" 
                        placeholderTextColor="gray" 
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="Password"
                            placeholderTextColor="gray"
                            secureTextEntry={!passwordVisible}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                            <Image 
                                source={passwordVisible ? require('../assets/eye.png') : require('../assets/hidden.png')} 
                                style={styles.passwordIcon} 
                            />                         
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={styles.forgotText}>Forgotten your password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signinButton} onPress={handleSignIn}>
                    <Text style={styles.signinText}>Sign In</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.signupNavigation} onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={styles.signupText}>Don't have an account?</Text>
            </TouchableOpacity>
        </View>
    );
};




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 50,
        bottom:-30,
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 10,
    },
    logoText: {
        fontSize: 65,
        fontWeight: 'bold',
        color: '#184F78',
        marginTop: 30,
    },
    highlight: {
        color: '#FEDC62',
    },
    formContainer: {
        width: '100%',
        backgroundColor: '#184F78',
        borderRadius: 50,
        padding: 30,
        alignItems: 'center',
        height: '100%',
        marginTop: 50,
    },
    title: {
        fontSize: 22,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 40,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 50, // Reduce space between inputs
    },
    label: {
        fontSize: 16, // Slightly bigger
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 15, // Less space between label and input
    },
    input: {
        width: '100%',
        backgroundColor: '#FFF',
        padding: 12,
        borderRadius: 10,
        fontSize: 16,
        color: 'black',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 12,
        borderRadius: 10,
        justifyContent: 'space-between',
    },
    passwordInput: {
        flex: 1,
        fontSize: 16,
        color: 'black',
    },
    forgotPassword: {
        alignSelf: 'flex-start',
        marginTop: -30, // Closer to password input
    },
    forgotText: {
        color: '#FFF',
        fontSize: 14,
    },
    signinButton: {
        backgroundColor: '#FEDC62',
        width: '80%',
        padding: 12,
        borderRadius: 50,
        alignItems: 'center',
        marginTop:50,
    },
    signinText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#184F78',
    },
    signupNavigation: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: '80%',
        padding: 12,
        borderRadius: 50,
        alignItems: 'center',
        position: 'absolute',
        bottom: 100, // Moves to the bottom
    },
    signupText: {
        color: '#FFF',
        fontSize: 16,
    },
    backIcon: {
        width: 24,
        height: 24,
        tintColor: '#184F78', 
      },
      
      passwordIcon: {
        width: 22,
        height: 22,
        tintColor: 'gray',
      },
});

export default SignInScreen;