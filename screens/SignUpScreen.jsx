import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

const SignUpScreen = ({ navigation }) => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [passwordVisible, setPasswordVisible] = useState(false);

    const registerStudent = async (first_name, last_name, email, password) => {
        try {
            const response = await fetch('http://localhost:7000/api/students/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name,
                    last_name,
                    email,
                    password
                }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                console.log("Student registered successfully:", data);
                alert("Registration successful!");
                return data;
            } else {
                console.error("Registration error:", data.message);
                alert(data.message || "Registration failed.");
                return null;
            }
        } catch (error) {
            console.error("Network error during registration:", error);
            alert("Network error. Please try again.");
            return null;
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('WelcomeScreen')}>
                <Image source={require('../assets/arrow.png')} style={styles.backIcon} />
            </TouchableOpacity>

            <Text style={styles.logoText}>κουί<Text style={styles.highlight}>ζ</Text>u</Text>

            <View style={styles.formContainer}>
                <Text style={styles.title}>SIGN UP</Text>

                {/* Input Fields */}
                <InputField label="First Name" value={first_name} setValue={setFirstName} />
                <InputField label="Last Name" value={last_name} setValue={setLastName} />
                <InputField label="Email" value={email} setValue={setEmail} />
                

                {/* Password Field */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="Enter your password"
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

                {/* Buttons */}
                <TouchableOpacity style={styles.signupButton} onPress={registerStudent}>
                    <Text style={styles.signupText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.alreadyAccount} onPress={() => navigation.navigate('SignInScreen')}>
                    <Text style={styles.alreadyText}>Already have an account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const InputField = ({ label, value, setValue }) => (
    <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={styles.input}
            placeholder={`Enter your ${label.toLowerCase()}`}
            placeholderTextColor="gray"
            value={value}
            onChangeText={setValue}
        />
    </View>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 50,
        bottom: -30
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
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20, // Reduce space between inputs
        
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 5,
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
    signupButton: {
        backgroundColor: '#FEDC62',
        width: '80%',
        padding: 12,
        borderRadius: 50,
        marginVertical: 10,
        alignItems: 'center',
    },
    signupText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#184F78',
    },
    alreadyAccount: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: '80%',
        padding: 12,
        borderRadius: 50,
        alignItems: 'center',
    },
    alreadyText: {
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

export default SignUpScreen;
