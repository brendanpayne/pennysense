import { StyleSheet, Text, View } from 'react-native'
import { useEffect } from 'react'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'Inter-Regular': require('@/assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('@/assets/fonts/Inter-Bold.ttf'),
    'Inter-SemiBold': require('@/assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Medium': require('@/assets/fonts/Inter-Medium.ttf'),
    'Inter-Light': require('@/assets/fonts/Inter-Light.ttf'),
    'Inter-Thin': require('@/assets/fonts/Inter-Thin.ttf'),
    'Inter-ExtraLight': require('@/assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Black': require('@/assets/fonts/Inter-Black.ttf'),
    'Inter-ExtraBold': require('@/assets/fonts/Inter-ExtraBold.ttf'),
  })

  useEffect(() => {
    if (error) {
      console.error(error)
    }
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) {
    return null
  }
  
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout