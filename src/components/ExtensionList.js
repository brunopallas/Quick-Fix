const React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Sample data for extensions
const extensionsData = [
  { id: '1', name: 'Jardinero' },
  { id: '2', name: 'Herrero' },
  { id: '3', name: 'Piscinero' },
];

const ExtensionList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.extensionItem}>
      <Text style={styles.extensionName}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={extensionsData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  extensionItem: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  extensionName: {
    fontSize: 18,
  },
});

export default ExtensionList;