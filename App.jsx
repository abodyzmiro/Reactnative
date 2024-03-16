import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import TestProvider from './src/store/testProvider';
// import MainNavigation from './src/route/nav';

const App = () => {

  return (
    <View style={styles.container}>
     <TestProvider>
        {/* <MainNavigation /> */}
      </TestProvider> 
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
     // cover the all the screen
  },
});
