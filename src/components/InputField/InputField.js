import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class InputField extends Component {
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          keyboardType="numeric"
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
    );
  }
}

const styles = StyleSheet.create({
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
