import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

function CustomButton({onPress, children, color}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, styles[color]]}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '90%',
    margin: 'auto',
    marginTop: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
  },
  blue: {
    backgroundColor: 'blue',
  },
  red: {
    backgroundColor: 'red',
  },
});

export default CustomButton;
