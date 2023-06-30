import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';


const UpdateProfile = () => {
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [names, setNames] = useState('');
    const [gender, setGender] = useState('');
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate.toString());
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: new Date(),
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

        const showDatepicker = () => {
        showMode('date');
        };
    

    return (
        <View>
            <Text style={{ fontSize: 40, textAlign: 'center', fontWeight: 'bold' }}>Update Profile</Text>
        
            <TouchableOpacity onPress={pickImage} style={{ alignSelf: 'center', marginTop: 30, }}>
                {!image ? <Icon name='user-circle-o' size={80} color='#4c4c4c' /> : <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 100, }} />}
            </TouchableOpacity>

            <View style={{ width: '85%', marginTop: 60, alignSelf: 'center' }}>
                <TextInput onChangeText={(val) => { setNames(val); }} placeholder='Enter Your Name' style={styles.textInput} />
                <Text style={styles.emailHeader}>Name</Text>
            </View>
            <View style={{ width: '85%', marginTop: 30, alignSelf: 'center' }}>
                <TextInput onChangeText={(val) => { setEmail(val); }} placeholder='Enter Your Email' style={styles.textInput} />
                <Text style={styles.emailHeader}>Email</Text>
            </View>
            <View style={{ width: '85%', marginTop: 30, alignSelf: 'center', }}>
                <TouchableOpacity onPress={showDatepicker} style={styles.textInput} ><Text>{date.length > 0 ? date : 'Date of Birth'}</Text></TouchableOpacity>
                <Text style={styles.emailHeader}>Date of Birth</Text>
            </View>
            <TouchableOpacity activeOpacity={.6} style={styles.loginButton}>
                <Text style={styles.textButton}>Update</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    loginButton: {
        width: '85%',
        height: 55,
        borderRadius: 10,
        backgroundColor: '#7fc7b4',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        alignSelf: 'center'
    },
    textButton: {
        color: '#fff',
        fontSize: 18,

    },
    emailHeader: {
        position: 'absolute',
        backgroundColor: '#f2f3fe',
        top: -10,
        left: 10,
        paddingHorizontal: 5,
        color: '#989ea3'
    },
    textInput: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#c4c4c4',
        borderRadius: 10,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
})
