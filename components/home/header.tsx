import { View, Text, useColorScheme, Image } from 'react-native'
import React from 'react'
import { styles } from '@/constants/Styles'
import { icons } from '@/constants/Images'
import { IconButton } from '@/components/Buttons'
import { router } from 'expo-router'

const header = () => {
  const colorScheme = useColorScheme();
  const darkMode = colorScheme === 'dark';
  const textColor = darkMode ? 'text-dark-text' : 'text-light-text';
  return (
    <View className='my-12 px-8 space-y-6'>
      <View className='flex-row justify-between items-ceneter mb-6'>
        <View>
          <Text className={`${styles.home.title} ${textColor}`}>Hi, Brendan</Text>
          <Text className={`${styles.home.subtitle} ${textColor}`}>Welcome back to PennySense</Text>
        </View>
        <View className='flex-row items-center'>
          <IconButton 
            title='Notifications'
            icon={icons.bell} 
            containerStyle={`${darkMode ? 'bg-black-200' : 'bg-white-200'} w-10 h-10`}
            iconColor={darkMode ? '#fff' : '#000'}
            onPress={() => {
              router.push('/notifications')
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default header