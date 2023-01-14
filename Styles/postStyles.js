import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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