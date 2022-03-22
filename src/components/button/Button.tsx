import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

type ButtonProps = {
  loading: boolean;
  text: string;
  onPress: () => void;
};

const Component = ({loading, text, onPress}: ButtonProps) => {
  if (loading) {
    return <ActivityIndicator></ActivityIndicator>;
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default Component;
