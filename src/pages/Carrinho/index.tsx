import React from 'react';
import { StyleSheet, View } from 'react-native';
import Detalhes from './componentes/Detalhe';

import Topo from './componentes/Topo';
import carrinho from '../../mocks/carrinho';

export default function Carrinho() {
  return <>
  <Topo titulo={carrinho.topo.titulo}/>
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
