import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from '../../Styles/postStyles';
import EntypoIcons from 'react-native-vector-icons/Entypo';

export default function Post(){
    return(
        <>
            <View style={styles.post}>
              <View style={styles.postHeader}>
              <Image style={styles.postPic} source={{
              uri: 'https://cdn.discordapp.com/attachments/773364102071975976/1043702426378698904/b9651dd10f22125b7bdc3fbe78a97e52.jpg',
              }} />
              <Text style={styles.postUser}>User12313</Text>
              </View>
              <Text style={styles.postContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
              <View style={styles.action}>
                <View style={styles.actionOp}>
                  <EntypoIcons size={30} name='heart' color='yellow' />
                  <Text style={{color: 'white'}}>Like</Text>
                </View>
                <View style={styles.actionMid}>
                  <EntypoIcons size={30} name='flash' color='yellow' />
                  <Text style={{color: 'white'}}>Eletrify</Text>
                </View>
                <View style={styles.actionOp}>
                  <EntypoIcons size={30} name='new-message' color='white' />
                  <Text style={{color: 'white'}}>Comment</Text>
                </View>
              </View>
            </View>
        </>
    )
}