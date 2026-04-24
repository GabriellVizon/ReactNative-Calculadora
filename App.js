import { StyleSheet, View } from 'react-native';
import Botao from './src/components/Botao';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.botao}>
        <Botao label="CE" triplo/>
        <Botao label="/"/>

        <Botao label="7"/>
        <Botao label="8"/>
        <Botao label="9"/>
        <Botao label="x"/>

        <Botao label="4"/>
        <Botao label="5"/>
        <Botao label="6"/>
        <Botao label="-"/>

        <Botao label="3"/>
        <Botao label="2"/>
        <Botao label="1"/>
        <Botao label="+"/>

        <Botao label="0" duplo/>
        <Botao label="."/>
        <Botao label="="/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  botao: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
