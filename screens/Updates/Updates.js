import React from "react";
import { View, Text } from "react-native";

export default function Notification() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#000' }}>
        <Text style={{color: 'white'}}>Updates!</Text>
      </View>
    );
  }