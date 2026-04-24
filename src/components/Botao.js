import { StyleSheet, Text, TouchableHighlight, Dimensions } from "react-native";

export default function Botao(props){
    const estilosBotao = [styles.Botao]
    if(props.triplo) estilosBotao.push(styles.BotaoTriplo)
    if(props.duplo) estilosBotao.push(styles.BotaoDuplo)

    return (
        <TouchableHighlight>
            <Text style={estilosBotao}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    Botao: {
        fontSize:40,
        height: Dimensions.get('screen').width / 4,
        width: Dimensions.get('screen').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#999'
    },
    BotaoTriplo: {
        width: Dimensions.get('screen').width / 4 * 2.999
    },
    BotaoDuplo: {
        width: Dimensions.get('screen').width / 4 * 1.999
    }
})