import React from 'react';
import { View, StyleSheet } from 'react-native';
import BarraSup from '../components/BarraSup';
import Header from '../components/Header';
import ExtensionList from '../components/ExtensionList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <BarraSup />
      <Header />
      <ExtensionList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;