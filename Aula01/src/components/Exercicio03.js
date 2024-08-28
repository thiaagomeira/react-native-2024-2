import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

const Exercicio03 = () => {

    const [text, setText] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder='Digite algo aqui...'
      />
      <Text>Você digitou: {text}</Text>
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

export default Exercicio03