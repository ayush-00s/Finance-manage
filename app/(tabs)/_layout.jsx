import { StyleSheet, Image } from 'react-native';
import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import user from '../../assets/images/user.png';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#A434EE', 
      tabBarStyle: {
        backgroundColor: '#151D1E'
      }
    }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="quickanalysis"
        options={{
          title: 'Quick Analysis',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="analytics" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Transaction"
        options={{
          title: 'Transaction',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="payment" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="category" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Image
              source={user}
              style={{
                width: 22,
                height: 22,
                tintColor: color, // Makes the icon adapt to active/inactive state
              }}
              resizeMode="contain" // Fixed typo
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
