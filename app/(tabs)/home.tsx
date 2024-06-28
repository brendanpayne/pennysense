import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'
import { styles } from '@/constants/Styles'
import header from '@/components/home/header'

const mock: any = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  }
]

const Home = () => {
  const colorScheme = useColorScheme();
  const darkMode = colorScheme === 'dark';
  const textColor = darkMode ? 'text-dark-text' : 'text-light-text';
  return (
    <GestureHandlerRootView>
      <SafeAreaView className={`h-full ${darkMode ? 'bg-dark-background' : 'bg-light-background'}`}>
        <FlatList
          data={mock}
          keyExtractor={(item: any) => item.$id}
          renderItem={({ item }) => (
            <View>
              <Text className='text-3xl'>{item.id}</Text>
            </View>
          )}
          ListHeaderComponent={header}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Home