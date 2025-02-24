import { useFonts } from "expo-font/";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { COLORS } from "../styles/colors";

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Helvetica: require('@/assets/fonts/Helvetica.ttf'),
    HelveticaBold: require('@/assets/fonts/Helvetica-Bold.ttf'),
    HelveticaLight: require('@/assets/fonts/Helvetica-Light.ttf')
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView style={layoutStyles.defaultContainer}>
      <StatusBar backgroundColor={COLORS.BLUE_10} barStyle={"dark-content"} />

      <Stack screenOptions={{ headerShown: false }} />

    </SafeAreaView>
  )
}

const layoutStyles = StyleSheet.create({
  defaultContainer: {
    flex: 1,
  }
})