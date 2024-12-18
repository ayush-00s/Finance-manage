import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.upperBox}>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>
      <View style={styles.box}>
        <View style={styles.section}>
          <Image 
            source={require('../assets/images/icon.png')}
            style={styles.icon}
          />
          <View style={styles.textContainer}>
            <Text style={styles.heading}>Track Your Spending</Text>
            <Text style={styles.content}>Add your expenses to see how you spend your money.</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Image 
            source={require('../assets/images/favicon.png')}
            style={styles.icon}
          />
          <View style={styles.textContainer}>
            <Text style={styles.heading}>Build A Budget</Text>
            <Text style={styles.content}>Know how much you can spend by making a budget for it.</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomBox}>
        <TouchableOpacity 
        style={styles.continueButton}
        onPress={() => router.push('/signin')}
         >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#151D1E', // Add this to prevent unintentional white space.
  },
  welcomeText: {
    fontSize: 40,
    fontFamily: 'SpaceMono',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  bottomBox: {
    flex: 0.5,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperBox: {
    flex: 0.5,
    backgroundColor: '#A434EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    position: 'absolute',
    top: '30%',
    left: '5%',
    right: '5%',
    backgroundColor: '#272F32',
    padding: 20,
    height: '35%',
    borderRadius: 20,
    justifyContent: 'space-around',
  },
  continueButton: {
    backgroundColor: '#A434EE',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'ChangaRegular',
    fontWeight: 'bold',
  },
  heading: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'ChangaBold',
    fontSize: 16,
  },
  content: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 5,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Adds spacing between sections.
  },
  textContainer: {
    flex: 1,
  },
});
