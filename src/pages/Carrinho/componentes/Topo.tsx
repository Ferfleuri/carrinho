import React from "react";
import { Image, Text, StyleSheet, Dimensions } from "react-native";


import topo from '../../../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Topo() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}>Detalhe do Carrinho</Text>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 578 / 768 * width
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 26,
    width: "100%",
    textAlign: "center",
    color: "white",
    position: "absolute",
    padding: 16
  }
})
