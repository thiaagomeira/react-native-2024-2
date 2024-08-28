import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Exercicio02 = () => {

    const [contador, setcontador] = useState(0)

    function incrementar() {
        setcontador(contador + 1)
    }

    function decrementar() {
        setcontador(contador - 1)
    }

  return (
    <View style={styles.container}>
      <Button title='incrementar' onPress={incrementar} />
      <Text>O contador está em: {contador}</Text>
      <Button title='decrementar' onPress={decrementar} />
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
export default Exercicio02