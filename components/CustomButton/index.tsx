import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

function CustomButton({onPress, children, color}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, styles.red]}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 'auto',
    marginTop: 20,
    padding: 10,
    paddingHorizontal: 60,
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
