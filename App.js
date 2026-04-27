import { StyleSheet, View } from 'react-native';
import Botao from './src/components/Botao';
import Visor from './src/components/Visor';
import { useState } from 'react';

const estadoInicial = {
    valorVisor: '0',
    limparVisor: false,
    operacao: null,
    valores: [0, 0],
    valorCorrente: 0
}

export default function App() {

  const[estado, setEstado] = useState({...estadoInicial})

  const adicionarDigito = n => {
    setEstado(prev => {
        const limparVisor = prev.valorVisor == '0' || prev.limparVisor

        if(n == '.' && !limparVisor && prev.valorVisor.includes
        ('.')) {
          return prev
        }

        const valorAtual = limparVisor ? '': prev.valorVisor
        const valorVisor = valorAtual + n
        
        let valores = prev.valores
        if(n !== '.'){
            const novoValor = parseFloat(valorVisor)
            valores = [...prev.valores]
            valores[prev.valorCorrente] = novoValor
        }
        return {...prev, valorVisor, limparVisor: false,
          valores}
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.Visor}>
          <Visor valorVisor={estado.valorVisor}/>
      </View>
      <View style={styles.botao}>
        <Botao label="CE" triplo/>
        <Botao label="/" operacao/>

        <Botao label="7" onClick={adicionarDigito}/>
        <Botao label="8" onClick={adicionarDigito}/>
        <Botao label="9" onClick={adicionarDigito}/>
        <Botao label="x" operacao/>

        <Botao label="4" onClick={adicionarDigito}/>
        <Botao label="5" onClick={adicionarDigito}/>
        <Botao label="6" onClick={adicionarDigito}/>
        <Botao label="-" operacao/>

        <Botao label="3" onClick={adicionarDigito}/>
        <Botao label="2" onClick={adicionarDigito}/>
        <Botao label="1" onClick={adicionarDigito}/>
        <Botao label="+" operacao/>

        <Botao label="0" duplo onClick={adicionarDigito}/>
        <Botao label="."/>
        <Botao label="=" operacao/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Visor:{
    flex: 1,
    backgroundColor: '#888'
  },
  botao: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
