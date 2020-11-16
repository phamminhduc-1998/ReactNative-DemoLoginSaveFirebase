import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
//đối tượng dùng để chứa các createStackNavigator
import { NavigationContainer } from '@react-navigation/native';
//đối tượng dùng để khai báo array các màn hình
import { createStackNavigator } from '@react-navigation/stack'
import Login from "./Screen/Login";
import Main from "./Screen/Main"


{/*
quản lý, chuyển màn hình
1: npm install @react-navigation/native @react-navigation/stack
2: expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
Cài đặt Firebase SDK  /  npm install --save firebase
*/}
//createStackNavigator là đối tượng dùng để quản lý chuyển đổi màn hình cơ bản nhất trong gói Navigation
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
          name="Login" //tên của màn hình, giá trị này dùng để định danh cho màn hình đó
          component={Login} //tham chiếu tới file .js màn hình đó
          options={{ title: 'Login' }}//khai báo 1 số thông tin cho màn hình đó như tiêu đề, nút back, actionBar ….
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Main' }}
        />
      </Stack.Navigator>

    </NavigationContainer>

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
