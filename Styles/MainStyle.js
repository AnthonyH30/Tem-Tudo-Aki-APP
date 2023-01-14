import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginTitle: {
        color: 'white',
        fontWeight: 'bold'
    },
    maskedInput:{
        flexGrow: 1,
        height: 40,
        fontSize: 18,
        borderBottomColor: '#999',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        alignSelf: 'flex-start',
        color: 'white'
    },
    input: {
        color: 'white'
    },
    containerMask:{
        flexDirection: 'row',
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10
    },
    errorMessage:{
        alignSelf: 'flex-start',
        marginLeft: 15,
        color: '#c00',
        fontSize: 12
    }
})

export default styles;