import React from 'react';
import FirstPage from './components/Firstpage';
import Login from './components/Login';
import { SafeAreaView,StyleSheet } from 'react-native';



function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Login/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  }
})

export default App;
