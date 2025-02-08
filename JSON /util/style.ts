import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 15,
        alignSelf: 'center',
        marginBottom: 20,
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        textAlign: 'center',
        marginBottom: 10,
    },
    button: {
        marginBottom: 50,
        backgroundColor: 'orange',
        width: 200,
        alignSelf: 'center',
    },
    buttonText: {
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 40,
        paddingRight: 40,
    },
    view: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        margin: 20,
        paddingTop: 20,
    }
})

export default styles;