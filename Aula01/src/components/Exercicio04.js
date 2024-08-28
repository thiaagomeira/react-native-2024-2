import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Exercicio04 = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <Text key={index} style={styles.item}>
          {item}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  item: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default Exercicio04;
