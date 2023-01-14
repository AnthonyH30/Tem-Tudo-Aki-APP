import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Navigation from "../../Navigation/Navigation";


export default function Principal() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})