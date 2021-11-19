import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

export function Button({ text, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      style={styles.button}
      activeOpacity={.7}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>

  )
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  }
})