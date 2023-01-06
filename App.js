import React, { useState } from 'react';
import { StyleSheet, Text, View ,  FlatList } from 'react-native';
import Header from './components/Header';
import TodoItem  from './components/TodoItem';
import AddToDo from './components/AddToDo';

export default function App() {
  const [person, setHome]= useState([
    {name:'U Ba', key:'1'},
    {name: 'Daw Myat', key: '2'},
    {name: 'Mg Khin Maung', key: '3' },
    {name: 'Ma Khin Khin Oo', key:'4'},
    {name: 'Mg Khin Thein', key:'5'},
    {name:'U Ba', key:'6'},
    {name: 'Daw Myat', key: '7'},
    {name: 'Mg Khin Maung', key: '8' },
    {name: 'Ma Khin Khin Oo', key:'9'},
    {name: 'Mg Khin Thein', key:'10'},
    {name:'U Ba', key:'11'},
    {name: 'Daw Myat', key: '12'},
    {name: 'Mg Khin Maung', key: '13' },
    {name: 'Ma Khin Khin Oo', key:'14'},
    {name: 'Mg Khin Thein', key:'15'},
  ])
  
  function pressableHander(key){
    setHome(
      (mperson)=>{
        return mperson.filter( mkey => mkey.key != key);
      }
    )
  }

  function submitHandlar(itext){
    setHome( (newToday)=>{
      return [
        {name: itext, key: Math.random().toString()},
        ...newToday
      ]
    })
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header/>
      <View>
        <AddToDo submitHandlar={submitHandlar}/>
      </View>
      <View style={styles.content}>
            <FlatList
                  data={person}
                  renderItem={({ item }) => (
                    <TodoItem item={item} pressableHander={pressableHander}/>
                  )}
            />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'

  },
  content: {
    padding: 10,
    marginBottom: 25,
    backgroundColor: '#F9F9F9',
  },
  
});
