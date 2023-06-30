import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const [isSecured, setIsSecured] = useState(true);

    const handlePasswordVisible = () => {
        setIsSecured(!isSecured);
    }
    const handleLogin = () => {
            // if(email.length === 0){
            //     setErrorMessage('The email should not be empty');
            //     return false
            // }
            // const req = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            // if(req === false){
            //     setErrorMessage('The email is not valid, use a real email.')
            //     return false;
            // }

            // if(password.length === 0){
            //     setErrorMessage('The password should not be empty');
            //     return false
            // }

        navigation.navigate('Drawer');

    }

    return (
        <View style={styles.container}>
            <StatusBar color='auto' backgroundColor='#4575a3' />
            <ScrollView>
                <View style={styles.upperView}>
                    <Text style={styles.header}>Welcome Back Again!</Text>
                    <Text style={styles.smallHeader}>Sign in to your account!</Text>
                </View>
                <View style={styles.lowerView}>
                    <View style={{ width: '85%' }}>
                        <TextInput onChangeText={(val) => { setEmail(val); setErrorMessage('')}} placeholder='Email Your Email' style={styles.textInput} />
                        <Text style={styles.emailHeader}>Email</Text>
                    </View>
                    <View style={{ width: '85%', marginTop: 30, }}>
                        <TextInput onChangeText={(val) => {setPassword(val); setErrorMessage('')}} placeholder='Password' style={styles.textInput} secureTextEntry={isSecured} />
                        <Text style={styles.emailHeader}>Password</Text>
                        <TouchableOpacity style={styles.eyeButton} onPress={handlePasswordVisible} activeOpacity={.6}>
                            <Icon name={isSecured ? 'eye' : 'eye-off'} size={30} color='#989ea3' />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={handleLogin} activeOpacity={.6} style={styles.loginButton}>
                        <Text style={styles.textButton}>Login</Text>
                    </TouchableOpacity>
                    <Text style={{ color: '#a12', marginTop: 20 }}>{errorMessage}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    loginButton: {
        width: '85%',
        height: 55,
        borderRadius: 10,
        backgroundColor: '#7fc7b4',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    textButton: {
        color: '#fff',
        fontSize: 18,
    },
    eyeButton: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    emailHeader: {
        position: 'absolute',
        backgroundColor: '#f2f3fe',
        top: -10,
        left: 10,
        paddingHorizontal: 5,
        color: '#989ea3'
    },
    lowerView: {
        alignItems: 'center',
        paddingTop: 50
    },
    textInput: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#c4c4c4',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#f2f3fe'
    },
    upperView: {
        width: '100%',
        height: 250,
        backgroundColor: '#4575a3'
    },
    header: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        marginTop: 40,
    },
    smallHeader: {
        paddingHorizontal: 20,
        color: '#c4c4c4'
    }
})
