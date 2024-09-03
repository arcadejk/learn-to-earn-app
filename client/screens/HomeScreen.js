// client/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Avatar from '../components/Avatar';

const HomeScreen = ({ navigation }) => {
  const avatarData = {
    imageUri: 'https://example.com/avatar.png',
    level: 5,
    xp: 1250,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Language Learner</Text>
      <Avatar avatarData={avatarData} />
      <Button
        title="Start Learning"
        onPress={() => navigation.navigate('Learning')}
      />
      <Button
        title="Marketplace"
        onPress={() => navigation.navigate('Marketplace')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;