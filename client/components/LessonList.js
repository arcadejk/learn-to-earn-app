// client/components/LessonList.js
import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LessonList = ({ lessons, onSelectLesson }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.lessonItem}
      onPress={() => onSelectLesson(item)}
    >
      <Text style={styles.lessonTitle}>{item.title}</Text>
      <Text style={styles.lessonDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={lessons}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  lessonItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lessonDescription: {
    fontSize: 14,
    color: 'gray',
  },
});

export default LessonList;