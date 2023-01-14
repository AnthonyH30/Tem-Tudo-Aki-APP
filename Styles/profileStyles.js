import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    profileContainer:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
    },
    profilePic:{
        width: 120,
        height: 120,
        borderRadius: '60%',
        borderColor: 'yellow',
        borderWidth: 1,
        marginTop: 20
    },
    nameView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    profileName: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginRight: 5
    },
    description: {
        color: 'white',
        textAlign: 'center',
        marginTop: 7,
        paddingBottom: 10,
    },
    sections: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        width: '100%',
        paddingBottom: 10
    },
    secTitle: {
        color: 'white'
    },
    secTitleMid: {
        color: 'yellow',
        marginHorizontal: 100
    },
    post: {
        backgroundColor: '#5A5A5A',
        width: 415,
        paddingLeft: 15,
        paddingTop: 8,
        marginVertical: 5
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postPic: {
        width: 40,
        height: 40,
        borderRadius: '50%',
    },
    postUser: {
        color: 'white',
        marginLeft: 8
    },
    postContent: {
        color: 'white',
        textAlign: 'left',
        marginVertical: 10
    },
    action: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginVertical: 10
    },
    actionOp: {
        alignItems: 'center'
    },
    actionMid: {
        marginHorizontal: 100,
        alignItems: 'center'
    }
})