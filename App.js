import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Button, TextInput } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
    <View style={styles.container}>
      <View>
        <View>
         <Text>Hello, friend</Text>
        </View>
      </View>

      <TextInput
        label="Email..."
        style={styles.input}
        mode="flat"
        underlineColor="tomato"
      ></TextInput>
      <TextInput
        label="Password..."
        style={styles.input}
        mode="flat"
        underlineColor="white"
      ></TextInput>

      <Button 
        onPress={() => console.log("HI KEVIN")}
        mode="contained"
        style={styles.button}
      >LOGIN</Button>
      <Button 
        onPress={() => console.log("HI CHEE")}
        mode="contained"
        style={styles.button}
      >REGISTER</Button>
      <Text>Forgot password?</Text>
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 30,
    backgroundColor: 'lightgreen',
  },
  input: {
    marginTop: 30,    
  }

});
