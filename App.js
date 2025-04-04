import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [extensions, setExtensions] = useState([
    { id: '1', name: 'Ad Blocker', enabled: true },
    { id: '2', name: 'Dark Mode', enabled: false },
    { id: '3', name: 'Password Manager', enabled: true },
    { id: '4', name: 'Translator', enabled: false },
  ]);

  const toggleExtension = (id) => {
    setExtensions(extensions.map(ext => 
      ext.id === id ? {...ext, enabled: !ext.enabled} : ext
    ));
  };

  const renderExtension = ({ item }) => (
    <View style={styles.extensionItem}>
      <Text style={styles.extensionName}>{item.name}</Text>
      <Switch
        value={item.enabled}
        onValueChange={() => toggleExtension(item.id)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Browser Extensions Manager</Text>
      <FlatList
        data={extensions}
        renderItem={renderExtension}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    padding: 10,
  },
  list: {
    paddingHorizontal: 20,
  },
  extensionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  extensionName: {
    fontSize: 18,
  },
});