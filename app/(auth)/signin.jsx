import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import FormField from '@/components/formfield';
import { useState } from 'react';
import "../../global.css";

const SignIn = () => {
  const [ form, setForm ] = useState({
    email:'',
    password:''
  })
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Box}>
          
          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({...form,
            email: e })} // it is an callback function which handles the event
            otherStyles= "mt-7"

          />
          <FormField 
            title="password"
            value={form.password}
            handleChangeText={(e) => setForm({...form,
            password: e })} // it is an callback function which handles the event
            otherStyles="mt-7"
          />
      </View>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A434EE',
  },
  Box: {
    position: 'absolute',
    bottom: 0, // used to anchor at bottom
    width: '100%',
    height: '90%',
    backgroundColor: '#D9D9D9',
    borderTopLeftRadius: 45, 
    borderTopRightRadius: 45, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  TextContainer: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'PoppinsLight',
    marginRight: '50%',
    marginBottom: '125%' ,
  }
})