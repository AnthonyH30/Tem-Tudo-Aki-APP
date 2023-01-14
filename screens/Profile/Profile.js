import React from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { styles } from '../../Styles/profileStyles';
import FontAweson from 'react-native-vector-icons/FontAwesome5';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Post from "../../Components/Post/Post";


export default function Profile() {
    return (
      <View style={styles.profileContainer}>
        <SafeAreaView style={{alignItems: 'center'}}>
          <Image style={styles.profilePic} source={{
            uri: 'https://cdn.discordapp.com/attachments/773364102071975976/1043702426378698904/b9651dd10f22125b7bdc3fbe78a97e52.jpg',
          }} />
          <View style={styles.nameView}>
            <Text style={styles.profileName}>Anthony H.</Text>
            <FontAweson name='brain' size={17} color='yellow' />
          </View>
          <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
          <View style={styles.sections}>
            <TouchableOpacity>
              <Text style={styles.secTitle}>Posts</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.secTitleMid}>Shares</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.secTitle}>Photos</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }