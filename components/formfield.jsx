import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FormField = ({ title, value, placeholder, handleChangeText,
  otherStyles
 }) => {
  return (
    <View style={StyleSheet.container}>
      <Text style={style.Text}>{title}</Text>
    </View>
  )
}

export default FormField

const style = StyleSheet.create({
  container: {
    flex : 'display',
  
  },
})