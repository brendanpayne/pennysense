import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'
import { styles } from '@/constants/Styles'

import Header from '@/components/home/header'
import Overview from '@/components/home/overview'
import Budget from '@/components/home/budget'

const mock: any = [...Array(100).keys()].map((i) => ({ $id: i, id: i }))

const Home = () => {
  const colorScheme = useColorScheme();
  const darkMode = colorScheme === 'dark';
  const textColor = darkMode ? 'text-dark-text' : 'text-light-text';
  return (
    <SafeAreaView className={`h-full px-8 ${darkMode ? 'bg-dark-background' : 'bg-light-background'}`}>
      <GestureHandlerRootView className='h-full mt-12 pb-12'>
        <FlatList
          data={mock}
          keyExtractor={(item: any) => item.$id}
          renderItem={({ item }) => (
            <View>
              <Text className='text-3xl'>{item.id}</Text>
            </View>
          )}
          ListHeaderComponent={
            <View className='space-y-6'>
              <Header />
              <Overview />
              <Budget />
            </View>
          }
        />
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}

export default Home