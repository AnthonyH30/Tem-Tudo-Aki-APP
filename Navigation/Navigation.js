import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Search from "../screens/Search/Search";
import Chat from '../screens/Chat/Chat';
import Feed from '../screens/Feed/Feed';
import Updates from '../screens/Updates/Updates';
import Profile from '../screens/Profile/Profile';


const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        headerShown: false,
        tabBarActiveTintColor: 'yellow',
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: 'rgba(255, 255, 255, 0.3)'
      },
      }}
    >
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='search' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='md-chatbox' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size }) => (
            <EntypoIcons name='flash' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Updates"
        component={Updates}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
