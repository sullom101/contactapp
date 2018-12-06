import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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
      <Text key={i}>{place}</Text>
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="Search for a number"
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button
            style={styles.placeButton}
            title="Search"
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View>{placeOutput}</View>
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
  inputContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%',
    borderColor: 'black',
    borderBottomWidth: 2
  },
  placeButton: {
    width: '30%'
  }
});
