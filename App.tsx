import {View, StatusBar, SafeAreaView } from 'react-native';
import Carrinho from './src/pages/Carrinho';
import {useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_400Regular_Italic } from '@expo-google-fonts/montserrat'

export default function App() {
  const [fonteCarregada] = useFonts ({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
    "MontserratItalic": Montserrat_400Regular_Italic
  })

  if (!fonteCarregada){
    <View/>
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Carrinho/>
    </SafeAreaView>
  );
}


