import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";


import logo from '../../../../assets/logo.png'

type Props = {
  nome: String,
  nomeFazenda: String,
  descricao: String,
  preco: String
}

export default function Detalhes ({nome, nomeFazenda, descricao, preco}: Props) {
  return <>
  <Text style={estilos.titulocarrinho}>{nome}</Text>
      <View style={estilos.Fazenda}>
        <Image style={estilos.imagemFazenda} source={logo}/>
        <Text style={estilos.nomeFazenda}>{nomeFazenda}</Text>
      </View>
      <Text style={estilos.descricao}>{descricao}
      </Text>
      <Text style={estilos.preco}>{preco}</Text>
  </>
}

const estilos = StyleSheet.create({
  titulocarrinho: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646"
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: "MontserratBold"
  },
  imagemFazenda: {
    width: 32,
    height: 32
  },
  Fazenda: {
    flexDirection: "row",
    paddingVertical: 12
  },
  descricao: {
    color: "#A3A3A3",
    fontStyle: "italic"
  },
  preco:{
    fontSize: 26,
    lineHeight: 42,
    color: "#2A9F85",
    marginTop: 8
  }
})
