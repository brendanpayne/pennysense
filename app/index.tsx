import { Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'



const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-iextrabold">PennySense</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="text-primary font-iregular">Go Home</Link>
    </View>
  )
}

export default index