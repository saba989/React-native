import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addHome } from '../redux/homeEntries';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');

  const handleSave = () => {
  const data={
  name: name,
  plannedAmount:plannedAmount,
  actualAmount:actualAmount
  }
  console.log(data);
    dispatch(addHome(data));

    navigation.navigate('HomeListing');
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        label="Planned Amount"
        value={plannedAmount}
        onChangeText={setPlannedAmount}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        label="Actual Amount"
        value={actualAmount}
        onChangeText={setActualAmount}
        style={styles.input}
        keyboardType="numeric"
      />
      <Button mode="contained" onPress={handleSave} style={styles.button}>
        Save
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('HomeListing')}
        style={styles.button}
      >
        Show Items
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginBottom: 16,
  },
});

export default Home;