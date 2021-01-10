import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

import ListItem from './components/ListItem';
import InputContainer from './components/InputContainer';

const App = () => {
  const [goalsList, setGoalsList] = useState([]);

  const deleteGoal = (goal) => {
    setGoalsList(goalsList.filter(goalItem => goalItem !== goal))
  };

  return (
    <View style={styles.screen}>
      <InputContainer setGoalsList={setGoalsList} goalsList={goalsList} />

      <FlatList
        style={styles.goalsList}
        keyExtractor={(item, index) => index.toString()}
        data={goalsList}
        renderItem={itemData => <ListItem title={itemData.item} deleteGoal={deleteGoal} />}
      />
      <Text>End Goals List</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    alignItems: 'center'
  },
  goalsList: {
    height: 180,
    width: '100%'
  }
});

export default App;