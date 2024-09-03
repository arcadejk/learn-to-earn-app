// client/components/Avatar.js
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Avatar = ({ avatarData }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatarData.imageUri }} style={styles.avatar} />
      <Text style={styles.level}>Level: {avatarData.level}</Text>
      <Text style={styles.xp}>XP: {avatarData.xp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  level: {
    marginTop: 10,
    fontSize: 16,
  },
  xp: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Avatar;