import { StyleSheet, View } from 'react-native';
import Botao from './src/components/Botao';
import Visor from './src/components/Visor';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Visor}>
          <Visor valorVisor={0}/>
      </View>
      <View style={styles.botao}>
        <Botao label="CE" triplo/>
        <Botao label="/" operacao/>

        <Botao label="7"/>
        <Botao label="8"/>
        <Botao label="9"/>
        <Botao label="x" operacao/>

        <Botao label="4"/>
        <Botao label="5"/>
        <Botao label="6"/>
        <Botao label="-" operacao/>

        <Botao label="3"/>
        <Botao label="2"/>
        <Botao label="1"/>
        <Botao label="+" operacao/>

        <Botao label="0" duplo/>
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
