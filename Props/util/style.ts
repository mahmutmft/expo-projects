import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        display: 'flex',
        flexDirection: 'row',
        margin: 20,
        borderRadius: 10
    },
    view: {
        display: 'flex',
        flexDirection: "row"
    },
    viewText: {
        marginTop: 10
    },
    textName: {
        fontWeight: 'bold',
        paddingTop: 20,
        paddingLeft: 20,
        marginBottom: 10,
    },
    text: {
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10
    },
    feature: {
        backgroundColor: '#bdb2b2',
        marginLeft: 20,
        padding: 5,
        width: 150
    }
})

export default styles;