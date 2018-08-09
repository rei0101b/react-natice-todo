import React from 'react';
import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#DDD',
  },
  todoContainer: {
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleteButton: {
    backgroundColor: '#e9546b',
    borderRadius: 4,
    padding: 3,
  }
});


export default (props) => {
  return (
    <ScrollView style={styles.scrollView}>
      {
        props.todos.map((todo, index) => (
          <View key={todo + index} style={styles.todoContainer}>
            <Text>{todo}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => props.onPressDelete(index)}
            >
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        ))
      }
    </ScrollView>
  );
};

