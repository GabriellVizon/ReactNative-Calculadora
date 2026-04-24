import {StyleSheet, View, Text} from "react-native";

export default function Visor(props) {
    return (
        <View style={styles.Visor}>
            <Text style={styles.valorVisor} numberOfLines={1}>
                {props.valorVisor}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    Visor: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3x)',
        alignItems: 'flex-end'
    },
    valorVisor: {
        fontSize: 60,
        color: '#fff'
    }
})