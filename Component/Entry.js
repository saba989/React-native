import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { List, Text } from 'react-native-paper';
import { useSelector } from 'react-redux';

const Entry = () => {
  const homeEntries = useSelector(state => state);
  Entries = Object.values(homeEntries)
   console.log("bug", Entries)


  const renderItem = ({ item }) => (
    <List.Item
      title={item.name}
      subtitle={item.plannedAmount}
      description={item.actualAmount}
     // description={`Planned Amount: ${item.plannedAmount} - Actual Amount: ${item.actualAmount}`}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Entry Listing</Text>
     <FlatList
        data={Entries}
        renderItem={renderItem}
      keyExtractor={item => item.id}

        //renderItem={({renderItem}) => <Item title={item.title} />}
  />
  {Entries?.map(element=>{
    console.log(element)
  })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Entry;