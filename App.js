import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem.js';
import InputField from './src/components/InputField/InputField.js';

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  };
  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };
  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.setState(prevState => {
      return { places: prevState.places.concat(prevState.placeName) };
    });
  };
  render() {
    const placeOutput = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place} />
    ));
    return (
      <View style={styles.container}>
        <InputField />
        <View style={styles.listContainer}>{placeOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 26
  },

  listContainer: {
    width: '80%',
    paddingTop: 10
  }
});
