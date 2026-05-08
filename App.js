import {  StyleSheet, View } from 'react-native'
import Botao from './src/components/Botao'
import Visor from './src/components/Visor'
import { useState } from 'react'

const estadoInicial = {
    valorVisor: '0',
    limparVisor: false,
    operacao: null,
    valores: [0, 0],
    valorCorrente: 0
}

export default function App() {

    const [estado, setEstado] = useState({...estadoInicial})

    const adicionarDigito = n => {
        setEstado(prev => {
           const limparVisor = prev.valorVisor == '0' || prev.limparVisor
           
           if(n == '.' && !limparVisor && prev.valorVisor.includes('.')) {
                return prev
           }

           const valorAtual = limparVisor ? '' : prev.valorVisor
           const valorVisor = valorAtual + n

           let valores = prev.valores
           if(n !== '.'){
                const novoValor = parseFloat(valorVisor)
                valores = [...prev.valores]
                valores[prev.valorCorrente] = novoValor
           }
           return {...prev, valorVisor, limparVisor: false, valores}
        })
    }

    const setOperacao = operacao => {
        setEstado(prev => {
            if(estado.valorCorrente == 0){
                return {...prev, operacao, valorCorrente: 1, limparVisor: true}

            } else {
                const igual = operacao == '='
                const valores = [...estado.valores]

                try {
                    valores[0] = eval(`${valores[0]} ${estado.operacao} ${valores[1]}`)
                } catch (error) {
                    valores[0] = estado.valores[0]
                }
                return { 
                  ...prev,
                  valorVisor: `${valores[0]}`,
                  operacao: igual ? null : operacao,
                  valorCorrente: igual ? 0 : 1,
                  limparVisor: true, 
                  valores
                }
            }
        })
    }

    const limparMemoria = () => {
        setEstado({...estadoInicial})
    }

    return (
        <View style={styles.container}>
            <View style={styles.visor}>
                <Visor valorVisor={estado.valorVisor} />
            </View>
            
            <View style={styles.botoes}>
                <Botao label="CE" triplo onClick={limparMemoria} />
                <Botao label="/" operacao onClick={setOperacao}/>

                <Botao label="7" onClick={adicionarDigito} />
                <Botao label="8" onClick={adicionarDigito} />
                <Botao label="9" onClick={adicionarDigito} />
                <Botao label="*" operacao onClick={setOperacao} />

                <Botao label="4" onClick={adicionarDigito}  />
                <Botao label="5" onClick={adicionarDigito} />
                <Botao label="6" onClick={adicionarDigito} />
                <Botao label="-" operacao onClick={setOperacao} />

                <Botao label="1" onClick={adicionarDigito}  />
                <Botao label="2" onClick={adicionarDigito} />
                <Botao label="3" onClick={adicionarDigito} />
                <Botao label="+" operacao onClick={setOperacao}/>

                <Botao label="0" duplo onClick={adicionarDigito} />
                <Botao label="." onClick={adicionarDigito} />
                <Botao label="=" operacao onClick={setOperacao}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    visor: {
        flex: 1,
        backgroundColor: '#888'
    },
    botoes: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})