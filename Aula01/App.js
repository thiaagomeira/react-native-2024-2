import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Exercicio04 from './src/components/Exercicio04';

const App = () => {
  const items = ['Banana', 'Maçã', 'Abacaxi', 'Morango'];

  return (
    <SafeAreaView style={styles.container}>
      <Exercicio04 items={items} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
});

export default App;
