import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import * as firebase from 'firebase';

export default function Login({ navigation }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [arr, setArr] = useState([]);


    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDhztHjOqqPgTN2Pzx-9vsx-9fzQy7xPtw",
        authDomain: "fir-democode-13af4.firebaseapp.com",
        databaseURL: "https://fir-democode-13af4.firebaseio.com",
        projectId: "fir-democode-13af4",
        storageBucket: "fir-democode-13af4.appspot.com",
        messagingSenderId: "797507222176",
        appId: "1:797507222176:web:1ea9498de2c3c9b0c4a7c5",
        measurementId: "G-71Z5ZL2FV3"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }


    //Them du lieu vao Realtime Database
    function storeNewStudent(name, email) {
        firebase.database().ref('students/' + name).set({
            Name: name,
            Email: email
        }, function (error) {
            if (error) {
                // The write failed...
                alert('Loi')
            } else {
                // Data saved successfully!
                alert('Thanh cong!!!')
            }
        });
    }


    //Hiển thị danh sách dữ liệu
    //Array Students sẽ được trả về trong biến snapshot. Mn sử dụng biến này truyền dữ liệu vào FlatList để hiển thị thông tin lên màn hình
    const readUserData = () => {
        firebase.database().ref('students/').on('value', function (snapshot) {

            let array = [];
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                array.push({

                    name: childSnapshot.key,
                    email: childData.Email,

                });
            });
            setArr(array)
            console.log(arr);
        });
    }


    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://www.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" }}
                style={
                    {
                        width: 100,
                        height: 100
                    }
                }></Image>
            <TextInput
                style={styles.textInput}
                placeholder="Name"
                onChangeText={
                    (text) => {
                        setName(text)
                    }
                }></TextInput>
            <TextInput
                style={styles.textInput}
                placeholder="Email"
                textContentType="emailAddress"
                onChangeText={
                    (text) => {
                        setEmail(text)
                    }
                }></TextInput>
            <Button title='HIEN THI' onPress={() => {
                readUserData();
                if (arr.length != 0) {
                    navigation.navigate('Main', { ARR: arr })
                }

            }}></Button>
            <Button title='THEM' onPress={() => { storeNewStudent(name, email); }} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {

        width: `80%`,
        borderWidth: 1,
        borderColor: "cyan",
        borderRadius: 5,
        padding: 10,
        margin: 10,

    }
});
