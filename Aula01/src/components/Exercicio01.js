import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio01 = ({ nome }) => {
  return (
    <View style={styles.container}>
      <Text>Olá, bem vendo {nome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifycContent: 'center',
      padding: 100
  }
})

export default Exercicio01