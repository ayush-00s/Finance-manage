import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack,SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import "../global.css";

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ChangaBold: require('../assets/fonts/Changa-Bold.ttf'),
    ChangaExtraBold: require('../assets/fonts/Changa-ExtraBold.ttf'),
    ChangaExtraLight: require('../assets/fonts/Changa-ExtraLight.ttf'),
    ChangaLight: require('../assets/fonts/Changa-Light.ttf'),
    ChangaMedium: require('../assets/fonts/Changa-Medium.ttf'),
    ChangaRegular: require('../assets/fonts/Changa-Regular.ttf'),
    ChangaSemiBold: require('../assets/fonts/Changa-SemiBold.ttf'),
    PoppinsBlack: require('../assets/fonts/Poppins-Black.ttf'),
    PoppinsLight: require('../assets/fonts/Poppins-Light.ttf'),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{headerShown: false}}
      />
    </Stack>
    
  )
}

export default RootLayout

const styles = StyleSheet.create({})