import { Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">PennySense</Text>
      <StatusBar style="auto" />
      <Link href="/explore">Go to explore</Link>
    </View>
  )
}

export default index