import React from 'react';
import { StyleSheet, View } from 'react-native';
import Detalhes from './componentes/Detalhe';

import Topo from './componentes/Topo';

export default function Carrinho() {
  return <>
  <Topo/>
    <View style={estilos.carrinho}>
      <Detalhes/>
    </View>
  </>
}

const estilos = StyleSheet.create({
  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16
  }
})
