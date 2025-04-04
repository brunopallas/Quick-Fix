const React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Header = ({ onFilterChange }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Extensions List</Text>
      <View style={styles.buttonContainer}>
        <Button title="Jardinero" onPress={() => onFilterChange('jardinero')} />
        <Button title="Herrero" onPress={() => onFilterChange('herrero')} />
        <Button title="Piscinero" onPress={() => onFilterChange('piscinero')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});

export default Header;